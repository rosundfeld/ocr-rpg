//firebase
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firebase-firestore"; 


var config = {
  apiKey: "AIzaSyAJu7dDh2JLieaSRk7UIceEyNQ_6pVFjJo",
  authDomain: "ocr-rpg.firebaseapp.com",
  databaseURL: "https://ocr-rpg.firebaseio.com",
  projectId: "ocr-rpg",
  storageBucket: "ocr-rpg.appspot.com",
  messagingSenderId: "149200075345",
  appId: "1:149200075345:web:c9755269310c1aef031670",
  measurementId: "G-85CH5FQN97"
};


class Firebase {
  constructor() {
    firebase.initializeApp(config)
    this.auth = firebase.auth()
    this.db = firebase.firestore()
  }

  login(email, password){
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout(){
    return this.auth.signOut()
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayName: name
    })
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName
  }

}
export default new Firebase();