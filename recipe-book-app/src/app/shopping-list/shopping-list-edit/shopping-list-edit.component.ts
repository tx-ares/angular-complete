import { Component, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('f') shoppingListForm: NgForm;
  private subscription: Subscription;
  public editMode: boolean = false;
  public editedItemIndex: number;
  public editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  public onSubmit(form: NgForm): void {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if ( this.editMode ) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }

    this.editMode = false;
    this.shoppingListForm.reset();
  }

  public onDelete(): void {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.clearForm();
  }

  public clearForm(): void {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  public ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
