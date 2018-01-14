var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userController')
/* GET users listing. */
router.get('/', userCtrl.findAll)
router.post('/', userCtrl.createUser)
router.delete('/:id', userCtrl.deleteUser)
router.put('/:id', userCtrl.updateUser)
router.post('/login', userCtrl.login)

module.exports = router;
