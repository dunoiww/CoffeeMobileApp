import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXxvP0wtYA0sPZTw6FIi7if0fqQHjc7Ac",
    authDomain: "coffee-4053c.firebaseapp.com",
    databaseURL: "https://coffee-4053c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "coffee-4053c",
    storageBucket: "coffee-4053c.appspot.com",
    messagingSenderId: "341567421880",
    appId: "1:341567421880:web:9a3ea8b6dc5e079727e34d",
    measurementId: "G-E5YDBS2X7E"
};

// Singleton object
class Firebase {
  constructor() {
    if (!Firebase.instance) {
      this.app = initializeApp(firebaseConfig);
      this.db = getDatabase(this.app);
      Firebase.instance = this;
    }
    return Firebase.instance;
  }
}

const firebaseInstance = new Firebase();
export default firebaseInstance;