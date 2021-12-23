const express = require('express')
const {v4 : uuidv4} = require('uuid')
const router = express.Router()
const db = require('./db')
//para traer un recurso
//TRAERA TODOS LOS MENSAJES
router.get('/',async (req, res) => {
    //me traera todos los mensajes y ara referencia a un objeto
    const snapshot = await db.collection('reservaciones').get()
    const data = []

    //recorreremos cada elemento del objeto y lo enviaremos a la funcion doc
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>' , doc.data())
        //podemos desestructurar el objeto data
        const docData = doc.data()
        //se va agrgar cada doc en el arreglo data
        data.push({
            ...docData,
            id:doc.id
        })
    })

    res.send({
        data
    })

})

router.post('/',async (req, res) => {
    //queremos obtener date,text,author de lo que me mande body
    const {nombre, apellido, email, telefono, personas, fecha, hora, text} = req.body
    const id = uuidv4()
    console.log(nombre, apellido, email, telefono, personas, fecha, hora, text)
    
    const docRef = db.collection('reservaciones').doc(id)

    const reservacion={
        nombre, 
        apellido, 
        email, 
        telefono, 
        personas, 
        fecha, 
        hora, 
        text
    }

    await docRef.set(reservacion )

    //cuando se crea exitosamente se crea un 201
    //por lo tanto la respuesta resivira el status 201
    res.status(201)
    //si todo salio bien le enviamos a la respuesta lo sig:
    res.send({
        ...reservacion,
        id
    })
})

module.exports = router