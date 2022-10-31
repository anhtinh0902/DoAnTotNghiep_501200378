import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyDKWTEPeEnSx10Xitlte3wIDHwYaWK4ZyY",
    authDomain: "nomad-bags-store-ca193.firebaseapp.com",
    projectId: "nomad-bags-store-ca193",
    storageBucket: "nomad-bags-store-ca193.appspot.com",
    messagingSenderId: "910139476650",
    appId: "1:910139476650:web:bfecd36c67f4d5bf861ed3"
  };

  firebase.initializeApp(config);

  const firestore = firebase.firestore();
  const auth = firebase.auth();
  const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) { return };

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapShot = await userRef.get();

    if (!snapShot.exits) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('Error creating user', error.message);
      }
    }
    return userRef;
  }


  export {
    firebase,
    createUserProfileDocument,
    auth,
  }