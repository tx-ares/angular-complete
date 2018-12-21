import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'servers', canActivate: [AuthGuardService], component: ServersComponent,
      children: [
        { path: ':id/edit', component: EditServerComponent},
        { path: ':id', component: ServerComponent}
      ]
    },
    { path: 'users', component: UsersComponent,
      children: [
        { path: ':id/:name', component: UserComponent }
      ]
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' } // catch invalid routes. MUST be last route because routes are parsed in order they're defined.
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) // forRoot will register the routes to the root of the application. 
                                       // Other things can be registered this way, but routes must be registered here.
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
