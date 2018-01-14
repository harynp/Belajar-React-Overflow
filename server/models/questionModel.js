const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new mongoose.Schema ({
  title       : { type: String },
  content     : { type: String },
  author      : { type: Schema.Types.ObjectId, ref: 'User' },
  like        : [{ type: Schema.Types.ObjectId, ref: 'User' }],
  dislike     : [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question
