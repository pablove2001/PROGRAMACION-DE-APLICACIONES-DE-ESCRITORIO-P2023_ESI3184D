const { Schema, model } = require('mongoose');

const tareaSchema = new Schema({
    title: { type: String },
    description: { type: String },
    status: { type: String, default: 'new' }
})

module.exports = model('tareas', tareaSchema);