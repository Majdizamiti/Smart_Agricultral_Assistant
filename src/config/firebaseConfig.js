// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Firebase configuration (use environment variables)
const firebaseConfig = {
  apiKey: "AIzaSyCvGdDwYMvYVGM8vSYZUqrsGbCsRQZoteM",
  authDomain: "smart-agricultral-assistant.firebaseapp.com",
  databaseURL: "https://smart-agricultral-assistant-default-rtdb.firebaseio.com",
  projectId: "smart-agricultral-assistant",
  storageBucket: "smart-agricultral-assistant.firebasestorage.app",
  messagingSenderId: "321440672849",
  appId: "1:321440672849:web:502b01c42c6cecfd0c9c70",
  measurementId: "G-RF8RJZXY08"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { auth, database, storage, signOut };
export default app;
