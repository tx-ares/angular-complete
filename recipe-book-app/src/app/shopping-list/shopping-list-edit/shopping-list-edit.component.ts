import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: HTMLInputElement;
  @ViewChild('amountInput') amountInput;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  shoppingList: Ingredient[];

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    this.ingredientAdded.emit(
      new Ingredient(this.nameInput['nativeElement'].value, this.amountInput['nativeElement'].value)
    );
  }

}
