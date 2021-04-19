const router = require('express').Router()
const MainController = require('../controllers')

router.post('/login', MainController.login)

module.exports = router