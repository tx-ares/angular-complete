import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  public onRecipeClicked() {
    this.recipeClicked.emit();
  }

}
