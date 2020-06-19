const {
  celebrate,
  Joi,
  Segments,
} = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      price: Joi.number().required(),
      category: Joi.string().required(),
    }),
  }),
  update: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      price: Joi.number().required(),
      category: Joi.string().required(),
    }),
  }),
  findOne: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      price: Joi.number().required(),
      category: Joi.string().required(),
    }),
  }),
  deleteOne: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      price: Joi.number().required(),
      category: Joi.string().required(),
    }),
  }),
};
