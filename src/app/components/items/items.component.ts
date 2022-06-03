import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:Item[]= [];
  total:number = 0;

  constructor() { }

  ngOnInit(): void {

    //se crea el ciclo de vida del component

    this.items = [
      {
        id:0,
        title:'manzana',
        price:10.5,
        quantity:4,
        completed: false
      },
      {
        id:1,
        title:'pan',
        price:10.5,
        quantity:3,
        completed: true
      },
      {
        id:2,
        title:'frijoles',
        price:10.5,
        quantity:3,
        completed: false
      }
    ]
    this.getTotal();
  };

  deleteItem(item: Item){
   this.items = this.items.filter(x => x.id !== item.id);
   this.getTotal();
  }

  getTotal(){
   this.total = this.items
   .filter(x => !x.completed)
   .map(x => x.quantity * x.price)
   .reduce((acc,item)=> acc += item,0)
  }

  toggleItem(item: Item){
  this.getTotal();
  }

}
