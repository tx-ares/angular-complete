import { Ingredient } from "app/shared/ingredient.model";

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Onions', 10),
  ]
};

export function shoppingListReducer(state = initialState, action) { // Reducer will handle state updates by creating a copy of it then making changes to the copy, remember that STORE is IMMUTABLE.
  // note that if state input is not provided, it will default to initialState variable.
}
