import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public canActivate(
    route: ActivatedRouteSnapshot, router: RouterStateSnapshot
    ): boolean | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
      return this.authService.user.pipe(
        take(1),
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
