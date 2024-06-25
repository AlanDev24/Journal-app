import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { clearNotesLogOut } from "../journal/journalSlice";
import { checkingCredentials, logOut, login } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials(email, password));
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

    if (!result.ok) return dispatch(logOut(result.errorMessage));
    delete result.ok;

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
    if (!ok) return dispatch(logOut({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, errorMessage, user } = await loginWithEmailPassword({
      email,
      password,
    });
    if (!ok) return dispatch(logOut({ errorMessage }));

    const { uid, displayName, photoURL } = user;
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(clearNotesLogOut());
    dispatch(logOut({}));
  };
};
