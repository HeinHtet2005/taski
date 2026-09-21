const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
const {body}  = require('express-validator');
const User = require('../models/User');
const handleMessage = require('../helpers/handleMessage');
router.post('/login',[
    body('email').notEmpty(),
    body('password').notEmpty()
],handleMessage,UserController.login)
router.post('/register',[
    body('name').notEmpty(),
    body('email').notEmpty(),
    body('email').custom(async (value)=>{
        const user = await User.findOne({email:value})
        if(user){
            throw new Error('email already exist')
        }
    }),
    body('password').notEmpty()

],handleMessage,UserController.register)
module.exports = router