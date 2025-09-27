const express = require('express')
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../Controller/captain.controller');
const { authCaptain } = require('../middleware/auth.middleware');
const { route } = require('./user.routes');


router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('vehicleDetails.color').isLength({min:3}).withMessage('Color must be at least 3 characters long'),
    body('vehicleDetails.liscencePlate').isLength({min:5}).withMessage('Liscence plate must be at least 5 characters long'),
    body('vehicleDetails.capicity').isInt({min:1,max:7}).withMessage('Capicity must be between 1 and 7'),
    body('vehicleDetails.vehicletype').isIn(['car','bike','auto']).withMessage('Vehicle type must be car, bike or auto')

],captainController.registerCaptain);


router.post('/login',[
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],captainController.loginCaptain  
)

router.get('/profile',authCaptain,captainController.getProfile);

router.get('/logout',authCaptain,captainController.logoutCaptain);
module.exports = router;