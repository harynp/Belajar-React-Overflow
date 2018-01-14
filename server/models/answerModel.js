const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new mongoose.Schema ({
  questionID  : {type: Schema.ObjectId, ref: 'Question'},
  author      : {type: Schema.ObjectId, ref: 'User'},
  answer      : {type: String},
  like        : [{ type: Schema.ObjectId, ref: 'User' }],
  dislike     : [{ type: Schema.ObjectId, ref: 'User' }]
})

const Answer = mongoose.model('Anwer', answerSchema)

module.exports = Answer
