const express=require('express');
const router=express.Router();
const {addProduct, modifiedProduct, deleteProduct , getAllProducts}=require('../controllers/productController')
const {AddProductRules,validator}=require('../middleware/bodyValidator');



router.post('/add_product',AddProductRules(),validator,addProduct)
router.put('/update_product/:id',validator,modifiedProduct)
router.delete('/delete_product/:id',deleteProduct)
router.get('/products', getAllProducts)

module.exports=router;