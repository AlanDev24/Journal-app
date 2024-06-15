import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logOuut, login } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials(email, password));
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

    if (!result.ok) return dispatch(logOuut(result.errorMessage));
    delete result.ok;

    dispatch( login( result ))
    
  };
};
