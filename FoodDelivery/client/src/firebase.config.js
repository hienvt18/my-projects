import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCioysMcVOS4BNsK2VeOFLOSOZDf3dee_k",
    authDomain: "restautrantapp-693af.firebaseapp.com",
    databaseURL: "https://restautrantapp-693af-default-rtdb.firebaseio.com",
    projectId: "restautrantapp-693af",
    storageBucket: "restautrantapp-693af.appspot.com",
    messagingSenderId: "89149643524",
    appId: "1:89149643524:web:f01170a8ce81a9b07c4e51"
};

const app = getApps.length > 0  ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }