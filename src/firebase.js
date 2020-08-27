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

  async sendCampInformation(campName, campMaster, campCharacter) {
    let userId = this.auth.currentUser.uid;
    await this.db.collection('users').doc(userId).collection('camps').add({
      name: campName,
      master: campMaster,
      character: campCharacter
  })
  }

async getCampInformation() {
  let userId = this.auth.currentUser.uid;
  
  const querySnapshot = await this.db.collection('users')
  .doc(userId)
  .collection('camps')
  .get();
  return querySnapshot.docs.map(function(doc) {
        return {...doc.data(), id: doc.id};
  });
}

async removeCampInformation(camp) {
  let userId = this.auth.currentUser.uid;

  if(true) {
    try {
      const querySnapshot = await this.db.collection('users')
      .doc(userId)
      .collection('camps')
      .doc(camp.id)
      .delete()
      return "A campanha " + camp.name + " foi removida com sucesso!";
    }
    catch(error) {
      return "Houve um erro durante o processo de exclusão: " + error;
    }
  }
  else{
    return "Operação cancelada";
  }

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