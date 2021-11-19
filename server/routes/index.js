const router = require('express').Router()
const userController= require('../controllers/userController')
const productController = require('../controllers/productController')
const errorHandler = require('../middlewares/errorHandler')
const authentication = require("../middlewares/authentication");


router.get('/', (req, res) => {
    res.send('this is for widyatama technical test')
})

router.post('/register', userController.register)
router.post('/login', userController.login)

router.use(authentication)

router.get('/users', userController.getUsers)

router.get('/products', productController.getProducts)
router.post('/products', productController.addProduct)
router.delete('/products/:id', productController.deleteProduct)
router.get('/products/:id', productController.detailProduct)
router.put('/products/:id', productController.editProduct)

router.use(errorHandler)


module.exports = router