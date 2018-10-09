import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipeBookComponent implements OnInit {

  public selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  public showRecipeDetail(recipeData) {
    console.log(recipeData);
    this.selectedRecipe = recipeData;
  }
}
