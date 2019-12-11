import { Action } from '@ngrx/store';
import { Ingredient } from 'app/shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT; // Our new AddIngredient class will inherit properties of Action class. And then we add a readonly property that simply tells TypeScript that this property must never be changed.

  constructor(public payload: Ingredient) { } // By adding payload to the constructor I can now pass in a payload argument to the AddIngredient constructor class.  ex) new ShoppingListActions.AddIngredient(payloadObject)
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) { }
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;

  constructor(public payload: { index: number, ingredient: Ingredient }) { }
}


export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;

  constructor(public payload: number) { }
}

export type ShoppingListActions =
  | AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient;