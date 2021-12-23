//nos traemos express
//este nos habilitara o creara un servidor
const express = require('express')
const app = express()
//messageRotes llamara al archivo messages.js
const revRoutes = require('./reservaciones')
const cors = require ('cors')
const PORT = 5000

//middleware
//convierte el bosy en un objeto json
app.use(cors())
app.use(express.json())

//cuando se use la ruta (/messages) llamara al metodo messagesRoutes
app.use('/reserv', revRoutes)

//app resivira una peticion y una respuesta
//este solo sera un intermediario para que tambien viva en nuestra maquina local
// app.get('/' , (req, res) => {
//     res.send({
//       message: "Hi"
//     })
// })
/*app.listen(5000, ()=> {                       app.listen(5000, function() {
                                es igual a

    })                                               })    */

    app.listen(5000, ()=> {
        console.log(`El servidor esta corriendo en el servidor: ${PORT}`)
    })