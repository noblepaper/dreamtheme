/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import {
  SET_USER,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  SET_USER_DATA,
  GET_USER_DATA_ERROR,
} from './constants';

export const initialState = {
  user: null,
  error: null,
  userData: null,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_USER:
        draft.user = action.payload.user;
        draft.userData = action.payload.data;
        draft.error = null;
        break;

      case SET_USER_DATA:
        draft.userData = action.payload;
        draft.error = null;
        break;

      case LOGOUT_USER:
        draft.user = null;
        draft.error = null;
        draft.userData = null;
        break;

      case LOGIN_USER_ERROR:
        draft.error = action.payload;
        break;

      case GET_USER_DATA_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default loginReducer;
