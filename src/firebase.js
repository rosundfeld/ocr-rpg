//firebase
import app from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
import "firebase/storage";


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
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
    this.storage = app.storage()
  }

  // population(){
  //   app.db.firestore().collection('camps-list').add({
  //       name: "Thunder Giants",
  //       master: "Pedro Pinho",
  //       char: "Miffhir"
  //     })
  // }

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

  getCurrentEmail() {
    return this.auth.currentUser && this.auth.currentUser.email
  }

  sendCampInformation(campName, campMaster, campCharacter) {
    let userId = this.auth.currentUser.uid;
    console.log(userId)
    this.db.collection('users').doc(userId).collection('camps').add({
      name: campName,
      master: campMaster,
      character: campCharacter
  })
  }

//   async getCampInformation() {
//     let userId = this.auth.currentUser.uid;
//     let list = [];
//     querySnapshot = await this.db.collection('users')
//     .doc(userId)
//     .collection('camps')
//     .get();
//       querySnapshot.forEach(function(doc) {
//            list.push(doc.data());
//       });
//       console.log(list)
//  return list;
//     }

async getCampInformation() {
  let userId = this.auth.currentUser.uid;
  let list = [];
  const camp = await this.db.collection('users')
  .doc(userId)
  .collection('camps')
  .get()
  return camp.get()
}

  // async getCampInformation() {
    
  //    this.db.collection('users')
  //   .doc(userId)
  //   .collection('camps')
  //   .get()
  //   .then(await function(querySnapshot) {
  //     querySnapshot.forEach(function(doc) {
  //         list.push(doc.data());
  //     });
  //     return list;
  // });
  // }

}
export default new Firebase()