const captainModel = require('../models/captain.model');
const {validationResult} = require('express-validator');
const captainService = require('../services/captain.service');

module.exports.registerCaptain = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {fullname,email,password,vehicleDetails} = req.body;
    const isCaptainalreadyExist = await captainModel.findOne({email});
    if(isCaptainalreadyExist){
        return res.status(409).json({error: 'Captain with this email already exists'});
    }
    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await captainService.createCaptain({firstname:fullname.firstname,email,password:hashedPassword,color:vehicleDetails.color,plate:vehicleDetails.liscencePlate,capicity:vehicleDetails.capicity,vehicletype:vehicleDetails.vehicletype});
    const token = captain.generateAuthToken();
    res.status(201).json({captain,token});
}

module.exports.loginCaptain = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {email,password} = req.body;
    const captain = await captainModel.findOne({email}).select('+password');
    if(!captain){
        return res.status(401).json({error: 'Invalid email or password'});
    }
    const isPasswordMatch = await captain.comparePassword(password);
    if(!isPasswordMatch){
        return res.status(401).json({error: 'Invalid email or password'});
    }
    const token = captain.generateAuthToken();
    res.cookie("token", token)
    res.status(200).json({captain,token});
}

module.exports.getProfile = async (req,res,next) => {
    res.status(200).json({captain: req.captain});
}

module.exports.logoutCaptain = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await require('../models/blacklisttoken.model').create({token});
    res.clearCookie("token");
    res.status(200).json({message: 'Logged out successfully'});
}