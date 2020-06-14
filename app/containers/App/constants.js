/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 */

export const SET_USER = 'app/Login/SET_USER';
export const LOGIN_USER_ERROR = 'app/Login/LOGIN_USER_ERROR';
export const LOGIN_USER_WITH_GOOGLE = 'app/Login/LOGIN_USER_WITH_GOOGLE';
export const LOGIN_USER_WITH_EMAIL = 'app/Login/LOGIN_USER_WITH_EMAIL';
export const LOGIN_USER_WITH_GITHUB = 'app/Login/LOGIN_USER_WITH_GITHUB';
export const REGISTER_NEW_USER = 'app/Login/REGISTER_NEW_USER';
export const LOGOUT_USER = 'app/Login/LOGOUT_USER';

export const GET_USER_DATA = 'app/User/GET_USER_DATA';
export const SET_USER_DATA = 'app/User/SET_USER_DATA';
export const GET_USER_DATA_ERROR = 'app/User/GET_USER_DATA_ERROR';
