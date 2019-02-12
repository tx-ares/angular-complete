import { Recipe } from './models/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Cheesy Steaks',
      'They are very cheesy',
      'https://assets.epicurious.com/photos/57d0394f7d2e71cf344f18a8/master/pass/philly-cheese-steak.jpg',
      [
        new Ingredient('Chopped Steak', 1),
        new Ingredient('Pepper Jack Cheese', 3)
      ]),
    new Recipe(
      'Meatza',
      'It is super meaty',
      'https://truffle-assets.imgix.net/7acd2776-1507_meatza_land1.jpg',
      [
        new Ingredient('Pizza Dough', 1),
        new Ingredient('Tomato Sauce', 1),
        new Ingredient('Sausage', 2),
        new Ingredient('Ground Beef', 2),
        new Ingredient('Venison', 2),
      ])
  ];

  getRecipe(index: number) {
    return this.recipes[index];
  }
  
  getRecipes() {
    return this.recipes.slice(); // By calling slice, we can make a copy of the recipes instead of affecting the service's.
  }
}
