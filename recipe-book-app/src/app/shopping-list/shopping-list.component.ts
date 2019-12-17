import { Component, OnInit, Input } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { LoggingService } from 'app/logging.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<{ ingredients: Ingredient[] }>;

  constructor(
    private loggingService: LoggingService,
    private store: Store<fromApp.AppState>) // Store must be defined as reducer map object, which contains the reducer as a key and its return value as a value.
  { }

  public onEditItem(index: number): void {
    // this.shoppingListService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  public ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    this.loggingService.printLog('Hi from ShoppingListComponent ngOnInit!');
  }


}
