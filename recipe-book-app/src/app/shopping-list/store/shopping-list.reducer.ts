import { Ingredient } from "app/shared/ingredient.model";
import { Action } from "@ngrx/store";

import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Onions', 10),
  ]
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.AddIngredient // Its important to use the correct type so that we have access to the payload ( or any other properties we define in the ShoppingListActions class. )
 ) { // Reducer will handle state updates by creating a copy of it then making changes to the copy, remember that STORE is IMMUTABLE.
  // note that if state input is not provided, it will default to initialState variable.
  switch(action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      }; // Add old state object to this object, effectively making a copy.
  }

}
