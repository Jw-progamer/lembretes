import firebase from 'firebase'

# TODO: colocar as configurações aqui novamente 

let dbapp = firebase.initializeApp(config)

const db = dbapp.database()

export default {
  db
}
