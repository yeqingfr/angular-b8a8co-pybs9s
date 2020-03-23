import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
items = [];

 addToCart(productA) {
    this.items.push(productA);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() { }

}