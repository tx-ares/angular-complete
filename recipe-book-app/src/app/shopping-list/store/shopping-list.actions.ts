import { Action } from '@ngrx/store';
import { Ingredient } from 'app/shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT; // Our new AddIngredient class will inherit properties of Action class. And then we add a readonly property that simply tells TypeScript that this property must never be changed.
  payload: Ingredient;
}
