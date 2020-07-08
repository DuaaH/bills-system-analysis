const joi = require('@hapi/joi');

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

module.exports = { validateEmail };
