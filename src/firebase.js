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

  async updateCampInformation(camp, campNameEdit, campMasterEdit, campCharEdit) {
    let userId = this.auth.currentUser.uid;
    try{
      const querySnapshot = await this.db.collection('users')
      .doc(userId)
      .collection('camps')
      .doc(camp.id)
  
    // Set the "capital" field of the city 'DC'
    return querySnapshot.update({
        character: campCharEdit,
        master: campMasterEdit,
        name: campNameEdit
    })
    }
    catch(error) {
      return "Houve um erro durante o processo de edição: " + error;
    }
  }

  async getCharInformation() {
    let userId = this.auth.currentUser.uid;
    
    const querySnapshot = await this.db.collection('users')
    .doc(userId)
    .collection('characters')
    .get();
    return querySnapshot.docs.map(function(doc) {
          return {...doc.data(), id: doc.id};
    });
  }

  async sendFichaInformation(
    charName, charClass, charLevel, charPlayerName,
    charRace, charAntencendent, charTendency, charExpPoints, charStr,
    charDex, charCon, charInt, charWis, charCar,
    charInspiration, charBonusProf, charStrResist, charDexResist,
    charConResist, charIntResist, charWisResist, charCarResist,
    charProfAcrobacia, charProfArcanismo, charProfAtletismo, charProfAtuacao,
    charProfBlefar, charProfFurtividade, charProfHistoria, charProfIntimidacao,
    charProfIntuicao, charProfInvesticacao, charProfAfinidadeAnimal, charProfMedicina,
    charProfNatureza, charProfPercepcao, charProfPersuasao, charProfPrestidigitacao,
    charProfReligiao, charProfSobrevivencia, charSabPass, charIdiomaEProf, charClassArmor,
    charIniciativa, charDesloc, charPVTotais, charDadosVida, charDadosVidaTotais,
    charAtaquesEMagic, charEquips, charPC, charPP, charPO, charPL, charTracosPerso,
    charIdeais, charLigacoes, charDefeitos, charHabilidadeCarac
    ) {
    let userId = this.auth.currentUser.uid;
    await this.db.collection('users').doc(userId).collection('characters').add({
      characterName: charName,
      class: charClass,
      level: charLevel,
      playerName: charPlayerName,
      race: charRace,
      antecedent: charAntencendent,
      tendency: charTendency,
      expPoints: charExpPoints,
      str: charStr,
      dex: charDex,
      con: charCon,
      int: charInt,
      wis: charWis,
      car: charCar,
      inspiration: charInspiration,
      bonusProf: charBonusProf,
      strResist: charStrResist,
      dexResist: charDexResist,
      conResist: charConResist,
      intResist: charIntResist,
      wisResist: charWisResist,
      carResist: charCarResist,
      profAcrobacia: charProfAcrobacia,
      profArcanismo: charProfArcanismo,
      profAtletismo: charProfAtletismo,
      profAtuacao: charProfAtuacao,
      profBlefar: charProfBlefar,
      profFurtividade: charProfFurtividade,
      profHistoria: charProfHistoria,
      profIntimidacao: charProfIntimidacao,
      profIntuicao: charProfIntuicao,
      profInvestigacao: charProfInvesticacao,
      profAfinidadeAnimal: charProfAfinidadeAnimal,
      profMedicina: charProfMedicina,
      profNatureza: charProfNatureza,
      profPercepcao: charProfPercepcao,
      profPersuasao: charProfPersuasao,
      profPrestidigitacao: charProfPrestidigitacao,
      profReligiao: charProfReligiao,
      profSobrevivencia: charProfSobrevivencia,
      sabPass: charSabPass,
      idiomaEProf: charIdiomaEProf,
      classArmor: charClassArmor,
      iniciativa: charIniciativa,
      desloc: charDesloc,
      PVTotais: charPVTotais,
      dadosVida: charDadosVida,
      dadosVidaTotais: charDadosVidaTotais,
      ataquesEMagic: charAtaquesEMagic,
      equips: charEquips,
      PC: charPC,
      PP: charPP,
      PO: charPO,
      PL: charPL,
      tracosPerso: charTracosPerso,
      ideais: charIdeais,
      ligacoes: charLigacoes,
      defeitos: charDefeitos,
      habilidadeCarac: charHabilidadeCarac
  })
  }

}
export default new Firebase()