const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({error: 'Access denied. No token provided.'});
    }
    const isBlackelisted = await require('../models/blacklisttoken.model').findOne({token});
    if(isBlackelisted){
        return res.status(401).json({error: 'Unauthorized'});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded._id);
        if(!req.user){
            return res.status(401).json({error: 'Invalid token.'});
        }
        return next();
    }catch(err){
        res.status(400).json({error: 'Invalid token.'});
    }
}

module.exports.authCaptain = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({error: 'Access denied. No token provided.'});
    }
    const isBlackelisted = await require('../models/blacklisttoken.model').findOne({token});
    if(isBlackelisted){
        return res.status(401).json({error: 'Unauthorized'});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.captain = await require('../models/captain.model').findById(decoded._id);
        if(!req.captain){
            return res.status(401).json({error: 'Invalid token.'});
        }
        return next();
    }catch(err){
        res.status(400).json({error: 'Invalid token.'});
    }
}