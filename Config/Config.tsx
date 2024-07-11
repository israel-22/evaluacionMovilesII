// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs342K_I5RUXXTSJsRu0y3MEpAe5rIo-s",
  authDomain: "moviles-687f0.firebaseapp.com",
  projectId: "moviles-687f0",
  storageBucket: "moviles-687f0.appspot.com",
  messagingSenderId: "449118254498",
  appId: "1:449118254498:web:0f85aa0d4f8a5bb0432efb"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
  export const storage = getStorage(app);