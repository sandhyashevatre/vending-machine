// src/app/product.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',

})
export class ProductService {
  private products: { id: number; name: string; price: number; quantity: number }[] = [
    { id: 1, name: 'Lays Potato Chips', price: 10, quantity: 10 },
    { id: 2, name: 'Kurkure', price: 20, quantity: 8 },
    { id: 3, name: 'Cadbury-Dairy Milk', price: 20, quantity: 10 },
    { id: 4, name: 'Kit Kat', price: 40, quantity: 8 },
    { id: 5, name: 'Parle-G', price: 10, quantity: 10 },
    { id: 6, name: 'Good Day', price: 20, quantity: 8 },
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  updateProductQuantity(id: number, quantity: number) {
    const product = this.getProductById(id);
    if (product) {
      product.quantity -= quantity;
    }
  }
}
