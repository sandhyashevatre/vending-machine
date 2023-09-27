import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.css'],
})
export class VendingMachineComponent {
  inputText: string = '';
  selectedProduct: any;
  selectedQuantity: number = 1;
  bill: number = 0;
  doorOpen: boolean = false;
  doorButtonText: string = 'Open Door';
  allProducts: any[];

  constructor(private productService: ProductService) {
    this.allProducts = this.productService.getProducts();
  }

  selectProduct() {
    const productId = parseInt(this.inputText, 10);
    this.selectedProduct = this.productService.getProductById(productId);
  }

  purchaseProduct() {
    if (this.selectedProduct) {
      if (this.doorOpen) {
        const totalCost = this.selectedProduct.price * this.selectedQuantity;
        if (this.selectedProduct.quantity >= this.selectedQuantity) {
          this.bill += totalCost;
          this.productService.updateProductQuantity(this.selectedProduct.id, this.selectedQuantity);
        } else {
          alert('Insufficient quantity in stock');
        }
      } else {
        alert('Please open the door before making a purchase.');
      }
    }
  }

  toggleDoor() {
    this.doorOpen = !this.doorOpen;
    this.doorButtonText = this.doorOpen ? 'Close Door' : 'Open Door'; 
  }
}
