const express  = require('express');
const router   = require('express-promise-router')();
const mongoose = require('mongoose');


const Business = require('../business/registerbusiness');
const registerBusiness = new Business();

router.route('/')
  .get(registerBusiness.getAll)
  .post(registerBusiness.newRegister);


module.exports = router;
