import { NgModule } from '@angular/core';
import { RecipeBookComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipesRouterModule } from './recipes-routing.module';


@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeDetailComponent
  ],
  imports: [ // Remember that in feature modules, directive modules like these must be included in the feature module, and not the AppModule.  Services are an exception since these can be instantiated once as a singleton service and be available to the entire application.
    CommonModule, // Template directives like ngIf and ngFor are usually provided by BrowserModule, however, BrowserModule can only be imported once in an Angular application since it handles start up processes as well as providing the template directives.  For that reason, you can use CommonModule to gain access to the template directives ONLY.
    ReactiveFormsModule,
    RouterModule,
    RecipesRouterModule
  ],
  // Since the components are only being used internally in the recipes module, these components don't need to be exported anymore as they won't be loaded anywhere else.
  // exports: [
  //   RecipeBookComponent,
  //   RecipeListComponent,
  //   RecipeItemComponent,
  //   RecipeStartComponent,
  //   RecipeDetailComponent
  // ]
})
export class RecipesModule { }
