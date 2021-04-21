import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBw0F4OR0ipSiTe2ThI9_G48jM1pIofObA",
    authDomain: "reactfirebase-16fc6.firebaseapp.com",
    databaseURL: "https://reactfirebase-16fc6.firebaseio.com",
    projectId: "reactfirebase-16fc6",
    storageBucket: "reactfirebase-16fc6.appspot.com",
    messagingSenderId: "305171841250",
    appId: "1:305171841250:web:1d8e39d93842a327fb1ebb",
    measurementId: "G-HLENT0BNNG"
  };

class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
        this.db = app.firestore();
        this.auth = app.auth();
    }

    isInit(){
        return new Promise(resolve=>{
            this.auth.onAuthStateChanged(resolve)
        });

    }

}

export default Firebase;
