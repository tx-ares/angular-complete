import { User } from "../user/user.model";
import * as AuthActions from "./auth.actions";

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false
}

export function authReducer(
    state = initialState,
    action: AuthActions.AuthActions
  ) {
    console.log(state);
  switch (action.type) {
    case AuthActions.AUTH_SUCCESS:
        const loggedInUser = new User(
          action.payload.email,
          action.payload.userId,
          action.payload.token,
          action.payload.expirationDate);
    return {
      ...state, // Always copy previous state.
      authError: null,
      loading: false,
      user: loggedInUser // Set user as the new user created above.
    }
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null
      }
    case AuthActions.LOGIN_START:
    case AuthActions.SIGNUP_START:
      return {
        ...state,
        loading: true,
        authError: null
      }
    case AuthActions.AUTH_FAIL:
      return {
        user: null,
        loading: false,
        authError: action.payload
      }
    case AuthActions.CLEAR_ERROR:
      return {
        ...state,
        authError: null
      }
    default:
      return state;
  }
}
