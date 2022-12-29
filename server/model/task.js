const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  title: String,
})

const tasks = mongoose.model('Tasks', dataSchema)
module.exports = tasks;