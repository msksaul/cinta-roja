const {
  celebrate,
  Joi,
  Segments,
} = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      nombre: Joi.array().items(Joi.string().required()),
      direccion: Joi.array().items(Joi.string().required()),
      telefono: Joi.array().items(Joi.number().required()),
      nit: Joi.array().items(Joi.string()),
      name: Joi.array().items(Joi.string()),
      cantidad: Joi.array().items(Joi.number()),
      price: Joi.array().items(Joi.number()),
    }),
  }),
};
