/*
 *
 * Login actions
 *
 */

import {
  SET_USER,
  LOGIN_USER_WITH_GOOGLE,
  LOGIN_USER_WITH_EMAIL,
  LOGIN_USER_WITH_GITHUB,
  LOGIN_USER_ERROR,
  REGISTER_NEW_USER,
  LOGOUT_USER,
  GET_USER_DATA,
  GET_USER_DATA_ERROR,
  SET_USER_DATA,
} from './constants';

export function doSetUser(payload) {
  return {
    type: SET_USER,
    payload,
  };
}

export function doLoginWithUserGoogle() {
  return {
    type: LOGIN_USER_WITH_GOOGLE,
  };
}

export function doLoginWithUserGithub() {
  return {
    type: LOGIN_USER_WITH_GITHUB,
  };
}

export function doLoginWithUserEmail() {
  return {
    type: LOGIN_USER_WITH_EMAIL,
  };
}

export function doRegisterNewUser() {
  return {
    type: REGISTER_NEW_USER,
  };
}

export function doLoginUserError(payload) {
  return {
    type: LOGIN_USER_ERROR,
    payload,
  };
}

export function doLogoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export function doGetUserData() {
  return {
    type: GET_USER_DATA,
  };
}

export function doSetUserData() {
  return {
    type: SET_USER_DATA,
  };
}

export function doGetUserDataError() {
  return {
    type: GET_USER_DATA_ERROR,
  };
}
