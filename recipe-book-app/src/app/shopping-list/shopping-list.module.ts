import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListRouterModule } from './shopping-list-router.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent,
  ],
  imports: [
    CommonModule, // Template directives like ngIf and ngFor are usually provided by BrowserModule, however, BrowserModule can only be imported once in an Angular application since it handles start up processes as well as providing the template directives.  For that reason, you can use CommonModule to gain access to the template directives ONLY.
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    ShoppingListRouterModule
  ]
})
export class ShoppingListModule { }
