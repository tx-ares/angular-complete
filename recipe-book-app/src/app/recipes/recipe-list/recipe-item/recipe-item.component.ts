import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeClicked = new EventEmitter<{recipeName: string, recipeInfo: string}>();

  constructor() { }

  ngOnInit() {
  }

  public onRecipeClicked(recipeData) {
    this.recipeClicked.emit({
      recipeName: recipeData.name,
      recipeInfo: recipeData.description
    });
  }

}
