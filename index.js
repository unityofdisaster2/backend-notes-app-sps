const express = require('express');

const { dbConnection } = require('./db/config');




// creacion de servidor

const exprApp = express();



// uso de middlewares

var cors = require('cors');


// Habilitar todas las peticiones CORS
exprApp.use( cors() );

exprApp.use( express.urlencoded({ extended: false}))
exprApp.use( express.json() );
// se establece conexion con la base de datos
dbConnection();


// se agregan rutas habilitadas para la API

exprApp.use('/servicio/api_notes_app/users', require('./routes/users'));
exprApp.use('/servicio/api_notes_app/notes', require('./routes/notes'));


exprApp.use('/servicio/api_notes_app/notes', require('./routes/notes'));
// middleware utilizado para poder parsear formatos JSON

exprApp.get('*', (req,res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// habilitar servidor para que escuche peticiones en el puerto especificado
exprApp.listen(process.env.PORT, () => {
    console.log('Servidor corriendo');
})




