import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css'],
})
export class AddItemsComponent implements OnInit {
  id: number = 0;
  title: string = '';
  price: number = 0;
  quantity: number = 0;

  constructor(private itemService:ItemService , private router:Router) {}

  ngOnInit(): void {}

  onSubmit() {
    let item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;
    this.itemService.addItem(item);
    this.router.navigate(['/'])
  }
}
