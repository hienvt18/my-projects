const express = require('express')
const router = express.Router()

const productController = require('../controllers/ProductController')

router.delete('/:productId', productController.delete)
router.put('/:productId', productController.update)
router.post('/create', productController.create)
router.get('/:slug', productController.show)
router.get('/', productController.get)

module.exports = router