import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeBookComponent } from './recipes.component';
import { AuthGuardService } from 'app/auth/auth-guard.service';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesResolverService } from './recipes-resolver.service';

const appRoutes: Routes = [
  {
    path: 'recipes', component: RecipeBookComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes) // forChild will register the routes for this feature module.
  ],
  exports: [RouterModule]
})
export class RecipesRouterModule { }
