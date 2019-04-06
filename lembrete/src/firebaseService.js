import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyA_xRShGK_P97gjFKbMxzoat5mWAAXQFlk',
  authDomain: 'lembretes-edfe0.firebaseapp.com',
  databaseURL: 'https://lembretes-edfe0.firebaseio.com',
  projectId: 'lembretes-edfe0',
  storageBucket: 'lembretes-edfe0.appspot.com',
  messagingSenderId: '106977370320'
}

let dbapp = firebase.initializeApp(config)

const db = dbapp.database()

export default {
  db
}
