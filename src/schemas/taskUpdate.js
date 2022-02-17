const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  status: Joi.string(),
});