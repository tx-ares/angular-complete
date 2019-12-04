import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' } // This sets the default path matching strategy to full, meaning it will only redirect if the FULL path is '' or empty.
];

@NgModule({ // This decorator changes this typescript class into an Angular Module.
  imports: [
    RouterModule.forRoot(appRoutes) // forRoot will register the routes to the root of the application.
    // Other things can be registered this way, but routes must be registered here.
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
