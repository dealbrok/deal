const router = require('express').Router()
const userController = require('../controller/userController')
const roomController = require('../controller/roomController')
const uploadController = require('../controller/uploadImageController')
const authentication = require('../middleware/authentication')
const errorHandler = require('../middleware/errorHandler')
const upload = require('../helper/multer')

//login
router.post('/login', userController.login)

//authentication
router.use(authentication)

//upload image
router.post('/uploadImage', upload.single('imageUrl'), uploadController.uploadImage)

//Room
router.get('/room', roomController.fetchAllRoom)
router.get('/room/:id', roomController.fetchRoomById)

//error handler
router.use(errorHandler)

module.exports = router