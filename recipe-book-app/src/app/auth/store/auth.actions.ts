import { Action } from "@ngrx/store";

export const LOGIN_START = '[Auth] LOGIN START';
export const LOGOUT = '[Auth] LOGOUT';
export const AUTH_SUCCESS = '[Auth] LOGIN';
export const AUTH_FAIL = '[Auth] LOGIN_FAIL';
export const SIGNUP_START = '[Auth] SIGNUP_START';
export const CLEAR_ERROR = '[Auth] CLEAR_ERROR'
export const AUTO_LOGIN = '[Auth] Auto Login';
export const SIGNUP = '[Auth] SIGNUP';


export class AuthSuccess implements Action {
  readonly type = AUTH_SUCCESS;

  constructor(
    public payload: { email: string, userId: string, token: string, expirationDate: Date }
  ) { }
}

export class AuthFail implements Action {
  readonly type = AUTH_FAIL;

  constructor(public payload: string) { }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: {email: string, password: string}) { }
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;

  constructor(public payload: {email: string, password: string}) { }
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export type AuthActions = AuthSuccess | AuthFail |Logout | LoginStart | SignupStart | ClearError | AutoLogin; // Typescript allows union classes.  This means that AuthActions will contain both classes. ( separated by pipe | symbol. )
