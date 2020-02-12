import { Actions, ofType, Effect } from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
};

@Injectable()
export class AuthEffects { // Effect classes are simply used to house additional logic to be ran when a specific action is dispatched.  It can also be used to dispatch more actions.
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START), // An operator for obserables used to filter for a value.
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKEY,
        {
          email: authData.payload.email,
          password: authData.payload.password,
          returnSecureToken: true
        }
      ).pipe(
        map(resData => {
          const expirationDate = new Date(
            new Date().getTime() + +resData.expiresIn * 1000  // Date().getTime() will return the current time stamp in milliseconds.  Adding a + sign infront of a variable will change it to number type if possible.
          );
          return new AuthActions.Login({
            email: resData.email,
            userId: resData.localId,
            token: resData.idToken,
            expirationDate: expirationDate
          });
        }),
        catchError(errorResponse => {
          // Since we are catching the error from within the chain, this return value must not be an error object, so that the rest of the chain will complete.

          let errorMessage = 'An unknown error occurred.';

          if (!errorResponse.error || !errorResponse.error.error) {
            return of(new AuthActions.LoginFail(errorMessage))
          }
          switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email exists already.';
              break;
            case 'EMAIL_NOT_FOUND':
              errorMessage = 'Invalid credentials.';
              break;
            case 'INVALID_PASSWORD':
              errorMessage = 'Invalid credentials.';
              break;
          }

          return of(new AuthActions.LoginFail(errorMessage));
        }),
      );
    })
  );

  @Effect({ dispatch: false }) // You can tell angular that an effect will not dispatch an additional action
  authSuccess = this.actions$.pipe(
    ofType(AuthActions.LOGIN),
    tap(() => {
      this.router.navigate(['/']);
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) { // The $ syntax is just a recommended method to distinguish that this property is an observable.  Totally optional.

  }
}
