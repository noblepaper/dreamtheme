/**
 * Handles logging in/out users using Firebase
 */
import { put, call, takeLatest } from 'redux-saga/effects';
import firebase from 'utils/firebase';
import { doSetUser, doLoginUserError } from './actions';
import {
  LOGIN_USER_WITH_GOOGLE,
  LOGIN_USER_WITH_EMAIL,
  REGISTER_NEW_USER,
} from './constants';

/**
 * Login users using google
 */
export function* loginUserWithGoogle() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    yield call(() =>
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(response => {
          const { user, credential } = response;
          const token = credential && credential.accessToken;

          return { user, token };
        })
        .catch(error => error),
    );
    // yield put(doSetUser(payload));
  } catch (err) {
    yield put(doLoginUserError(err));
  }
}

/**
 * Login users using email/password
 */
export function* loginUserWithEmail({ email, password }) {
  try {
    const payload = yield call(() =>
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => error),
    );
    yield put(doSetUser(payload));
  } catch (err) {
    yield put(doLoginUserError(err));
  }
}

/**
 * Register a new user with email/password
 */
export function* registerNewUser({ name, email, password }) {
  try {
    // create new user with email, password
    yield call(() =>
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => error),
    );
    // add name to user object
    const user = firebase.auth().currentUser;

    yield call(() =>
      user
        .updateProfile({
          displayName: name,
        })
        .then(() => true)
        .catch(error => error),
    );

    // yield put(doSetUser(payload));
  } catch (err) {
    yield put(doLoginUserError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* defaultSaga() {
  yield takeLatest(LOGIN_USER_WITH_GOOGLE, loginUserWithGoogle);
  yield takeLatest(LOGIN_USER_WITH_EMAIL, loginUserWithEmail);
  yield takeLatest(REGISTER_NEW_USER, registerNewUser);
}
