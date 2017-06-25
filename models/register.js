const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const registerSchema = new Schema({
  uuid: String,
  date: String,
  temperature: String,
  uv: String,
  humidity: String
});

const Register = mongoose.model('register', registerSchema);
module.exports = Register;
