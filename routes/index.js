const express = require ('express')
const router = express.Router()
const personController = require('../controller/person')
const blogRoute = require('./blog')

router.post('/person' , personController.create)
router.use('/blog', blogRoute)

module.exports = router; 