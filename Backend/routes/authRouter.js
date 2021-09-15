const express=require('express');
const {register,login,getAllUsers , modifiedUser , getAuthUser , deleteUser}=require('../controllers/authController')
const { loginRules , validator, registerRules} = require('../middleware/bodyValidator');
const isAuth = require('../middleware/isAuth');
const router=express.Router()

router.post('/register',registerRules(),validator,register)
router.post('/login',loginRules(),validator,login)
router.get('/users',getAllUsers)
router.get('/current_user', isAuth, getAuthUser)
router.put('/update_user/:id',validator,modifiedUser)
router.delete('/delete_user/:id',deleteUser)

module.exports=router
