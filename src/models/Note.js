const {Schema, model} = require('mongoose'); 

//Define lo que quiero guardar dentro de la DB
const NoteSchema = new Schema({ 

    title: {type: String, required: true},
   description:{ type: String, required: true},
   user: {type: String, require: true }

}, {
    timestamps: true
})

module.exports = model('Note', NoteSchema);
