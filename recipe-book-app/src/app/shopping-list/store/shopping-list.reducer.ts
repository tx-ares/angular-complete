import { Ingredient } from "app/shared/ingredient.model";
import { Action } from "@ngrx/store";

import { ADD_INGREDIENT } from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Onions', 10),
  ]
};

export function shoppingListReducer(state = initialState, action: Action ) { // Reducer will handle state updates by creating a copy of it then making changes to the copy, remember that STORE is IMMUTABLE.
  // note that if state input is not provided, it will default to initialState variable.
  switch(action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action]
      }; // Add old state object to this object, effectively making a copy.
  }

}
