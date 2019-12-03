import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './user/user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  public signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKEY,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
      .pipe(
        tap(responseData => {
          this.handleAuth(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn);
        }),
        catchError(this.handleError)
      );
  }


  public login(email: string, password: string) {
    console.log(environment.firebaseAPIKEY)

    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKEY,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
      .pipe(
        tap(responseData => {
          this.handleAuth(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn);
        }),
        catchError(this.handleError)
      );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    console.log(errorResponse);
    let errorMessage = 'An unknown error occurred.';

    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
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
    return throwError(errorMessage);
  }

  private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    console.log(email, userId, token)
    const expirationDate = new Date(
      new Date().getTime() + +expiresIn * 1000  // Date().getTime() will return the current time stamp in milliseconds.  Adding a + sign infront of a variable will change it to number type if possible.
    );
    const user = new User(
      email,
      userId,
      token,
      expirationDate
    );
    this.user.next(user);
  }
}
