import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
  apiKey: "AIzaSyDcoLEP3dlos_zDbazNryUXkpy5H1W-qdw",
  authDomain: "explofort-app.firebaseapp.com",
  projectId: "explofort-app",
  storageBucket: "explofort-app.appspot.com",
  messagingSenderId: "215451990902",
  appId: "1:215451990902:web:2c79c922847ec1c6725857",
  measurementId: "G-CRMVLVZJXE"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
