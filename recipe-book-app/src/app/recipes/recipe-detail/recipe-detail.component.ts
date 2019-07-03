import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  @Input() selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService, 
              private router: Router,
              private route: ActivatedRoute,
              private recipeService: RecipeService) { }

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
      this.shoppingListService.addIngredient(ingredient);
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
