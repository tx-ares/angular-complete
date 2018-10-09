import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeClicked = new EventEmitter<{recipeName: string, recipeInfo: string}>();

  public recipes: Recipe[] = [
    new Recipe(
      'Cheesy Steaks',
      'They are very cheesy',
      'https://assets.epicurious.com/photos/57d0394f7d2e71cf344f18a8/master/pass/philly-cheese-steak.jpg'),
    new Recipe(
      'Meatza',
      'It is super meaty',
      'https://truffle-assets.imgix.net/7acd2776-1507_meatza_land1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  public showRecipeDetail(event) {
    console.log(event);
  }

  public notifyParent(recipeData) {
    this.recipeClicked.emit({
      recipeName: recipeData.recipeName,
      recipeInfo: recipeData.recipeInfo
    });
  }
}
