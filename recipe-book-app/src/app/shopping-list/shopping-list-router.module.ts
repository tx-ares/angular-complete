import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';

const appRoutes: Routes = [{ path: 'shopping-list', component: ShoppingListComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes) // forRoot will register the routes to the root of the application.
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingListRouterModule { }
