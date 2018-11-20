import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './models/recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cheesy Steaks',
      'They are very cheesy',
      'https://assets.epicurious.com/photos/57d0394f7d2e71cf344f18a8/master/pass/philly-cheese-steak.jpg'),
    new Recipe(
      'Meatza',
      'It is super meaty',
      'https://truffle-assets.imgix.net/7acd2776-1507_meatza_land1.jpg')
  ];

  getRecipes() {
    return this.recipes.slice(); // By calling slice, we can make a copy of the recipes instead of affecting the service's.
  }
}
