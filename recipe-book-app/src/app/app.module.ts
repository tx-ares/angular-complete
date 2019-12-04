import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IngredientComponent } from './shopping-list/models/ingredient/ingredient.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRouterModule } from './app-router.module';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [ // Important thing to know is that Components, Pipes, Directives, etc. can only be declared ONCE in the ENTIRE APPLICATION. Make sure this is the case when using multiple feature modules.
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    IngredientComponent,
    RecipeEditComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouterModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  entryComponents: [
    AlertComponent // Components that are not generated at runtime should be added to entryComponents array.  This is telling Angular that at some later time these components will be loaded / rendered.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
