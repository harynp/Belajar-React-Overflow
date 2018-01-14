const User = require('../models/userModel')
const ObjectId = require('mongodb').ObjectId
const jwt = require('jsonwebtoken')

const findAll = (req,res) => {
  User.find()
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send(err)
  })
}

const createUser = (req,res) => {
  let salt = bcrypt.genSaltSync(10)
  let hash = bcrypt.hashSync(`${req.body.password}`, salt)
  User.create({
    username  : req.body.username,
    password  : hash,
    email     : req.body.email,
    fullname  : req.body.fullname
  })
  .then(newUser => {
    res.send(newUser)
  })
  .catch(err => {
    res.send(err)
  })
}

const deleteUser = (req,res) => {
  User.findByIdAndRemove({_id: ObjectId(req.params.id)})
  .then(removeUser => {
    res.send({
      message: 'this user success deleted',
      deleteUser : deleteUser
    })
  })
  .catch(err => {
    res.send(err)
  })
}

const updateUser = (req,res) => {
  User.findByIdAndUpdate({_id: ObjectId(req.params.id)},{
    username: req.body.username,
    password: req.body.password,
    email : req.body.email,
    fullname: req.body.fullname
  })
  .then(updateUser => {
    res.send({
      message : 'User success Updated !',
      updateUser: updateUser
    })
  })
  .catch(err => {
    res.send(err)
  })
}

const login = (req,res) => {
  User.findOne({
    username : req.body.username
  })
  .then(signin => {
    console.log(signin);
    if(signin === null) {
      res.send({
        message : 'User Belum Register'
      })
    } else {
      if (bcrypt.compareSync(req.body.password, signin.password)) {
        const createToken = jwt.sign({
          id: signin.id,
          username : signin.username
        }, process.env.KATASANDI)
        res.send(createToken)
      } else {
        res.send('Password Tidak Sama')
      }
    }
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  findAll,
  createUser,
  deleteUser,
  updateUser,
  login
}
