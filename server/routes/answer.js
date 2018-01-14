const route = require('express').Router()
const AnswerCtrl = require('../controllers/answerController')
const Auth = require('../helpers/auth')

route.get('/', AnswerCtrl.findAll)
route.post('/', AnswerCtrl.createAnswer)
route.get('/:id', AnswerCtrl.findByQuestionId )
route.put('/likes/:id', Auth.isLogin, AnswerCtrl.Likes)
route.put('/dislikes/:id', Auth.isLogin, AnswerCtrl.Dislikes)

module.exports = route
