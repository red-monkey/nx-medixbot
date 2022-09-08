import { initializeApp } from 'firebase/app';
import { Database, getDatabase, onValue, ref } from 'firebase/database';
import { Dispatch } from 'redux';
import { parseDate } from '../utils/cgm.util';
import { updateCGM, ICGM } from '../redux/actions/cgm';

class FirebaseService {
  private database: Database;
  constructor() {
    this.database = getDatabase(
      initializeApp({
        apiKey: 'AIzaSyD4nJfI9GmVXSEFnNtJLinaD9x5lnQkLns',
        authDomain: 'cgm-data.firebaseapp.com',
        databaseURL:
          'https://cgm-data-default-rtdb.europe-west1.firebasedatabase.app',
        projectId: 'cgm-data',
        storageBucket: 'cgm-data.appspot.com',
        messagingSenderId: '1042120886086',
        appId: '1:1042120886086:web:08c5ffbea303d337690747',
      })
    );
  }

  readCGMData(dispatch: Dispatch) {
    const query = ref(this.database, 'cgm_db_dev');
    onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        try {
          const glucose = Object.entries(data.glucose_info)
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
