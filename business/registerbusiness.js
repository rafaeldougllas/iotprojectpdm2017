const Persistence = require('../persistence/registerPersistence');
const RegisterPersistence = new Persistence();

function registerBusiness(){

};

registerBusiness.prototype.getAll = async (req, res, next) =>{
  try{
    console.log('Call getAll');
    const registers = await RegisterPersistence.getAll();
    res.status(200).json(registers);
  }catch(err){
    next(err);
  }
};

registerBusiness.prototype.newRegister = async (req, res, next) =>{
  try{
    console.log('new Register');
    //req.value.body;
    var body = req.body;
    const usuario = await RegisterPersistence.newRegister(body);
    res.status(201).json(usuario);
  }catch(err){
    next(err);
  }
};


module.exports = registerBusiness;
