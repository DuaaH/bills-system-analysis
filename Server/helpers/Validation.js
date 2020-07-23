const joi = require('@hapi/joi');
const RegExp = require('xregexp');

// To ensure that user type email correctly
const validateEmail = (email) => {
  const schema = joi.object({
    email: joi
      .string()
      .min(6)
      .required()
      .email(),
  });
  return schema.validate(email);
};

// To ensure that user enter both email and password
const validateLoginInfo = (userData) => {
  const schema = joi.object({
    email: joi
      .string()
      .min(6)
      .required()
      .email(),
    password: joi
      .string()
      .required()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });
  return schema.validate(userData);
};

const newBillValidation = (billData) => {
  const schema = joi.object({
    providerId: joi.number().required(),
    type: joi.string().required(),
    totalAmount: joi.number().required(),
    billDate: joi.date().required(),
    dueDate: joi.date().required(),
    startDate: joi.date().required(),
    endDate: joi.date().required(),
    billNumber: joi.number().required(),
  });
  return schema.validate(billData);
};


const validatesignupInfo = (userData) => {
  const schema = joi.object({
    email: joi
      .string()
      .min(6)
      .required()
      .email(),
    userName: joi
      .string()
      .min(3)
      .max(30)
      .required()
      .pattern(new RegExp('^[a-zA-Z_0-9 ]')),
    password: joi
      .string()
      .min(8)
      .required()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    rePassword: joi.ref('password'),
  });
  return schema.validate(userData);
};
const personalInfoValidation = (userInfo) => {
  const schema = joi.object({
   display_name: joi.string().required(),
   phone:joi.string().required(),
   city: joi.string().required(),
   town: joi.string().required(),
    personal_status: joi.string().required(),
    number_of_individuals:joi.number().required(),
    number_of_devices: joi.number().required(),
  });
  return schema.validate(userInfo);
};


module.exports = { validateEmail, validateLoginInfo, validatesignupInfo ,personalInfoValidation , newBillValidation };


