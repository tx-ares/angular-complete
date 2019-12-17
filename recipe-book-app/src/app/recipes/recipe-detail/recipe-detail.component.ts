import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducer'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;
  public id: number;

  @Input() selectedRecipe: Recipe;

  constructor(
              private store: Store<fromShoppingList.AppState>,
              private router: Router,
              private route: ActivatedRoute,
              private recipeService: RecipeService
  ) { }

  public ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  public sendToShoppingList(selectedRecipe: Recipe): void {
    selectedRecipe.ingredients.forEach((ingredient) => {
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
      // this.shoppingListService.addIngredient(ingredient);
    });
  }

  public onEditRecipe(): void {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  public onDeleteRecipe(): void {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
