const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const captainSchema = new mongoose.Schema({
   fullname: {
    firstname: { type: String, required: true, minlength:[3,'First name must be at least 3 characters long'] },
    lastname: { type: String,minlength:[3,'Last name must be at least 3 characters long'] },
   },
   email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minlength:[6,'Password must be at least 6 characters long'],select:false},
    socketID:{type:String},
    vehicleDetails: {
        color: { type: String, required: true,minlength:[3,'Color must be at least 3 characters long'] },
        liscencePlate: { type: String, required: true,minlength:[5,'Liscence plate must be at least 5 characters long'] },
        capicity: { type: Number, required: true,min:1,max:7 },
        vehicletype: { type: String, required: true,minlength:[3,'Vehicle type must be at least 3 characters long'],enums:['car','bike','auto'] },
    },
    status: { type: String, default:'inactive', enums: ['active', 'inactive'], required: true },
    location: { latitude: { type: Number }, longitude: { type: Number } },
});

captainSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { _id: this._id },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  return token;
}
captainSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
}

captainSchema.statics.hashPassword = async function(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}


const captainModel = mongoose.model('captain', captainSchema);
module.exports = captainModel;
