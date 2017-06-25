const Register = require('../models/register');

function RegisterPersistence(){

};

RegisterPersistence.prototype.getAll = async function(){
  //Get All registers
  var registers =  await Register.find({});
  return registers;
};


RegisterPersistence.prototype.newRegister = async function(register){
  //Creating a new register
  const newRegister = new Register(register);
  var registerNew = await newRegister.save();
  return registerNew;
};



module.exports = RegisterPersistence;
