import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipeBookComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // This sets the default path matching strategy to full, meaning it will only redirect if the FULL path is '' or empty.
  { path: 'recipes', component: RecipeBookComponent, 
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent } 
    ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: '/not-found' } // catch invalid routes. MUST be last route because routes are parsed in order they're defined.
];

@NgModule({ // This decorator changes this typescript class into an Angular Module.
  imports: [
      RouterModule.forRoot(appRoutes) // forRoot will register the routes to the root of the application.
                                     // Other things can be registered this way, but routes must be registered here.
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
