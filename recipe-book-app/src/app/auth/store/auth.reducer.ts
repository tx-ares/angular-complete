import { User } from "../user/user.model";
import * as AuthActions from "./auth.actions";

export interface State {
  user: User;
}

const initialState: State = {
  user: null
}

export function authReducer(
    state = initialState,
    action: AuthActions.AuthActions
  ) {
    console.log(state);
  switch (action.type) {
    case AuthActions.LOGIN:
        const loggedInUser = new User(
          action.payload.email,
          action.payload.userId,
          action.payload.token,
          action.payload.expirationDate);
    return {
      ...state, // Always copy previous state.
      user: loggedInUser // Set user as the new user created above.
    }
    case AuthActions.LOGOUT:
      return {
        ...state.user,
        user: null
      }
    default:
      return state;
  }
}
