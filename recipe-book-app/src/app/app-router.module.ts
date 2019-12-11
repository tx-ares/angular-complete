import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

 const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // This sets the default path matching strategy to full, meaning it will only redirect if the FULL path is '' or empty.

  // Routes work with 'string method' of loading children in Angular 8 and below.
  // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  // { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  // { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' },

  // Routes work with new 'import method' only Angular 8 and above.
  { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) }
];

@NgModule({ // This decorator changes this typescript class into an Angular Module.
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }) // forRoot will register the routes to the root of the application.
    // Other things can be registered this way, but routes must be registered here.
    // Setting PreloadAllModules will tell angular to load the lazy loaded modules as soon as possible .  This will improve performance.
    // it is also possible to create your own preloadingStrategy.
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
