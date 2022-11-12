
//Conexion a Base de datos
const mongoose = require('mongoose');

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGO_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGO_URI, 
{useNewUrlParser: true, useUnifiedTopology: true})

.then(()=> console.log('Base de datos conectada'))
.catch(e => console.log(e) )

