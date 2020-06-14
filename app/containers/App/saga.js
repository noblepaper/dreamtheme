/**
 * Handles logging in/out users using Firebase
 */
import { put, call, takeLatest } from 'redux-saga/effects';
import { database, auth } from 'utils/firebase';
import _ from 'lodash';

import {
  doSetUser,
  doLoginUserError,
  doSetUserData,
  doGetUserDataError,
} from './actions';
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
    const provider = new auth.GoogleAuthProvider();
    const user = yield call(() =>
      auth()
        .signInWithPopup(provider)
        .then(response => {
          const { credential } = response;
          const token = credential && credential.accessToken;

          return { user: response.user, token };
        })
        .catch(error => error),
    );
    const uid = _.get(user, 'user.uid');
    const data = yield call(() =>
      database
        .collection('users')
        .doc(uid)
        .get()
        .then(doc => {
          if (!doc.exists) console.log('No such document!'); // eslint-disable-line no-console
          return doc.data();
        })
        .catch(error => error),
    );
    yield put(doSetUser({ user, data }));
    // yield put(doSetUserData(data));
  } catch (error) {
    console.error('ERROR logging in user or getting user data'); // eslint-disable-line no-console
    console.log(error); // eslint-disable-line no-console
    yield put(doLoginUserError(error));
  }
}

/**
 * Login users using email/password
 */
export function* loginUserWithEmail({ email, password }) {
  try {
    const payload = yield call(() =>
      auth()
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
      auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => error),
    );
    // add name to user object
    const user = auth().currentUser;

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
 * Gets logged in user data
 */
export function* getUserData({ uid }) {
  try {
    const data = yield call(() =>
      database
        .collection('users')
        .doc(uid)
        .onSnapshot(doc => doc.data()),
    );
    console.log(data); // eslint-disable-line no-console
    yield put(doSetUserData(data));
  } catch (error) {
    console.error(`ERROR getting user data from firestore for uid: ${uid}`); // eslint-disable-line no-console
    yield put(doGetUserDataError(error));
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
