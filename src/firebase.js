import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD953DjsrMfhF2-PcZvtcNpQAbE1GfcYOU",
    authDomain: "automovile-unit.firebaseapp.com",
    projectId: "automovile-unit",
    storageBucket: "automovile-unit.appspot.com",
    messagingSenderId: "576236112599",
    appId: "1:576236112599:web:3b41355a984887d1247e92",
    measurementId: "G-RFPLCL296Q"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storageBucketUrl = 'gs://automovile-unit.appspot.com';
const storage = getStorage(app, storageBucketUrl);

export default storage;
