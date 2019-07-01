import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  public ingredientsChanged = new EventEmitter<Ingredient[]>();
  public startedEditing = new Subject<number>();
  
  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Onions', 10),
  ];

  public newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice(); // Create a copy of the ingredients property array.
  }

  public getIngredient(index: number): Ingredient {
    return this.ingredients[index]
  }

  public addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  public deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients);
  }

  public updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
