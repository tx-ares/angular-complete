import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRouterModule } from './app-router.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlertComponent } from './shared/alert/alert.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effects';

@NgModule({
  declarations: [ // Important thing to know is that Components, Pipes, Directives, etc. can only be declared ONCE in the ENTIRE APPLICATION. Make sure this is the case when using multiple feature modules.
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      fromApp.appReducer
    ), // When importing Store, it must have all reducers that will be used in the .forRoot() method.
    EffectsModule.forRoot([AuthEffects]),
    AppRouterModule,
    SharedModule,
    CoreModule
  ],
  entryComponents: [
    AlertComponent // Components that are not generated at runtime should be added to entryComponents array.  This is telling Angular that at some later time these components will be loaded / rendered.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
