
const {
    getAllProducts,
    getOneProducts,
    getPublishedProduct,
    addProduct,
    updateProducts,
    deleteProducts
} = require('../controllers/productController')

const router = require('express').Router()

router.post('/addProduct',addProduct)

router.get('/allProducts',getAllProducts)

router.post('/published',getPublishedProduct)

router.get('/:id',getOneProducts)

router.put('/:id',updateProducts)

router.delete('/:id',deleteProducts)



module.exports = router

