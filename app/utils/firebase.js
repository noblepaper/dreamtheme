import * as firebase from 'firebase';

// const {
//   API_KEY,
//   AUTH_DOMAIN,
//   DB_URL,
//   PROJECT_ID,
//   STORAGE_BUCKET,
//   MESSAGING_SENDER_ID,
//   APP_ID,
//   MEASUREMENT_ID,
// } = process.env;

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

firebase.initializeApp(config);
firebase.analytics();
// const auth = firebase.auth();
const database = firebase.database().ref();

export { database };
export default firebase;
