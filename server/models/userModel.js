const mongoose = require('mongoose')
const Schema   = mongoose.Schema
      bcrypt   = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {type: String},
  password: {type: String},
  email: {type: String},
  fullname: {type: String},
  createdAt: {type: Date, default: Date.now}
})

const User = mongoose.model('User', userSchema)

module.exports = User
