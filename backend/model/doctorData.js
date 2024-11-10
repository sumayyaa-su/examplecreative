const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  doctorImage:String,
  doctorId:String,
  doctorName:String,
  doctorEmail:String,
  doctorSpecialty:String,
  doctorBio:String,
  doctorExperience:Number,
  doctorPassword:String
  
}, { bufferCommands: false });

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
