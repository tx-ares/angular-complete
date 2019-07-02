import { Recipe } from './models/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  constructor(private shoppingListService: ShoppingListService) { }

  public getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
  
  public getRecipes(): Recipe[] {
    return this.recipes.slice(); // By calling slice, we can make a copy of the recipes instead of affecting the service's.
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) { 
    this.shoppingListService.addIngredients(ingredients);
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  public updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  
  public deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
