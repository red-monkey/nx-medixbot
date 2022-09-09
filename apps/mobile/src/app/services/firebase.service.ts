import { initializeApp } from 'firebase/app';
import { Database, getDatabase, onValue, ref } from 'firebase/database';
import { Dispatch } from 'redux';
import { parseDate } from '../utils/cgm.util';
import { updateCGM, ICGM } from '../redux/actions/cgm';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} from '@env';

class FirebaseService {
  private database: Database;
  constructor() {
    this.database = getDatabase(
      initializeApp({
        apiKey: FIREBASE_API_KEY,
        authDomain: FIREBASE_AUTH_DOMAIN,
        databaseURL: FIREBASE_DATABASE_URL,
        projectId: FIREBASE_PROJECT_ID,
        storageBucket: FIREBASE_STORAGE_BUCKET,
        messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
        appId: FIREBASE_APP_ID,
      })
    );
  }

  readCGMData(dispatch: Dispatch) {
    const query = ref(this.database, 'cgm_db_dev');
    onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        try {
          const glucose = Object.entries(data)
            .map(([id, value]: any) => {
              return {
                id,
                activity: value.activity,
                location: value.device_location,
                value: value.glucose_val,
                date: parseDate(value.local_datetime),
              };
            })
            .filter((data) => data.value > 0);
          dispatch(updateCGM(glucose as ICGM[]));
        } catch (err) {
          console.log(err);
        }
      }
    });
  }
}

export default new FirebaseService();
