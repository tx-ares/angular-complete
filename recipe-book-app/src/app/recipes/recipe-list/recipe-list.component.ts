import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Cheesy Steaks',
      'They are very cheesy',
      'https://assets.epicurious.com/photos/57d0394f7d2e71cf344f18a8/master/pass/philly-cheese-steak.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
