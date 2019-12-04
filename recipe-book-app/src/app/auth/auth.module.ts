import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const appRoutes: Routes = [{ path: 'auth', component: AuthComponent }];

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(appRoutes), // Since there's only one route, I can just pass in the one route here in my RouterModule instead of creating a seperate AuthRouterModule.
  ]
})
export class AuthModule { }
