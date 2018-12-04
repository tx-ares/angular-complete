import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;
  // @Output() toListIngredients = new EventEmitter<Ingredient[]>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  sendToShoppingList(selectedRecipe: Recipe) {
    console.log(selectedRecipe , ' << sendToShoppingList fired');
    // this.toListIngredients.emit(selectedRecipe.ingredients);
    selectedRecipe.ingredients.forEach((ingredient) => {
      this.shoppingListService.addIngredient(ingredient);
    });
  }


}
