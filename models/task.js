const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
var connection = mongoose.createConnection("mongodb://localhost/" +  process.env.DB_NAME || 'test');
autoIncrement.initialize(connection);

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true},
    context: { type: String},
})

TaskSchema.plugin(autoIncrement.plugin, 'TaskModel');

const model = mongoose.model('TaskModel', TaskSchema)

module.exports = model