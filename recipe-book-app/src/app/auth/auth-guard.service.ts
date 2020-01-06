import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  public canActivate(
    route: ActivatedRouteSnapshot, router: RouterStateSnapshot
    ): boolean | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
      // return this.authService.user.pipe(
      return this.store.select('auth').pipe(
        take(1),
        map(authState => { // So now that we're retrieving our user from store / app state, we need to map the correct observable, which is the user object in store.
          return authState.user;
        }),
        map(
          user => {

            const isAuthenticated = !!user; // Remember !! can be used to return a true boolean value if the value exists, or a false boolean value if it doesn't

            if (isAuthenticated) {
              return true;
            }

            return this.router.createUrlTree(['/auth']);
          }
        )
      );
  }
}
