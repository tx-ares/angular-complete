import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    // return this.authService.user.pipe(
    return this.store.select('auth').pipe(
      take(1), // 'take' is a rxjs operator which "takes" however many values from an obserable and then unsubscribes once that value is reached.
      map(authState => {
        return authState.user;
      }),
      exhaustMap(user => { // exhaustMap is another rxjs operator which will replace our initial obserable ( the authService.user ) with another observable, which will be our http request instead.  This is a good way to get a value from one obserable and make it available to another without keeping the subscription to the first observable.
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone(
          {
            params: new HttpParams().set('auth', user.token )
          })
        return next.handle(modifiedReq);
      }));
  }
}
