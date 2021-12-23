//en este archivo ira toda la logica de conexion a la base de datos

const admin = require('firebase-admin');
const dotenv = require('dotenv');
dotenv.config();

admin.initializeApp({

    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_KEY))

});

const db = admin.firestore()

//necesitamos exportarlo para que otro script tenga acceso a este modulo
module.exports =db
