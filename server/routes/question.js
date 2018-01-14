const route = require('express').Router()
const QuestionCtrl = require('../controllers/questionController')
const Auth = require('../helpers/auth')

route.get('/', QuestionCtrl.findAll)
route.post('/', Auth.isLogin, QuestionCtrl.createQuestion)
route.get('/:id', QuestionCtrl.findById)
route.put('/likes/:id', Auth.isLogin, QuestionCtrl.Likes)
route.put('/dislikes/:id', Auth.isLogin, QuestionCtrl.Dislikes)
module.exports = route
