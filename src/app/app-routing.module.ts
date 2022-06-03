import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  {
    path:'',
    component:ItemsComponent
  },
  {
    path:'add',
    component: AddItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
