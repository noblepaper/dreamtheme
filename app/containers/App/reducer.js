/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { SET_USER, LOGIN_USER_ERROR, UNSET_USER } from './constants';

export const initialState = {
  user: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_USER:
        draft.user = action.payload;
        draft.error = null;
        break;

      case UNSET_USER:
        draft.user = null;
        draft.error = null;
        break;

      case LOGIN_USER_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default loginReducer;
