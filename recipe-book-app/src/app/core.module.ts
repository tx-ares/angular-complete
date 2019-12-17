import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipes/recipe.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ // This core module is an alternative to providing services in the AppModule.  We can continue to optimize our application by splitting our services into are CoreModule that then gets imported into AppModule.
    // ShoppingListService,  // File should be deleted, keeping for reference though.  NGRX has now replaced all need for the ShoppingListService
    RecipeService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ]
})
export class CoreModule { }
