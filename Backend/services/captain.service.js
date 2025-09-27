const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({firstname,lastname,email,password,color,plate,capicity,vehicletype}) => {
    if(!firstname || !email || !password || !color || !plate || !capicity || !vehicletype){
        throw new Error('All fields are required');
    }
    const captain = await captainModel.create({
        fullname: {firstname,lastname},
        email,
        password,
        vehicleDetails: {
            color,
            liscencePlate: plate,
            capicity,
            vehicletype
        },
    });
    return captain;
}