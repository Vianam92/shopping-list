import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items: Item[] = [
    {
      id: 0,
      title: 'manzana',
      price: 10.5,
      quantity: 4,
      completed: false,
    },
    {
      id: 1,
      title: 'pan',
      price: 10.5,
      quantity: 3,
      completed: true,
    },
    {
      id: 2,
      title: 'frijoles',
      price: 10.5,
      quantity: 3,
      completed: false,
    },
  ];

  constructor() {}

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.items.unshift(item);
  }
}
