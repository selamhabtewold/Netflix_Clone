import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDAg1hvSGXQu9-GRY_cdmfI790V9-3IY78",
    authDomain: "netflix-clone-31332.firebaseapp.com",
    projectId: "netflix-clone-31332",
    storageBucket: "netflix-clone-31332.appspot.com",
    messagingSenderId: "181755739687",
    appId: "1:181755739687:web:4adf901602bc5e7a141802"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  export { app, auth, db };


