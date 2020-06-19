/* eslint-disable no-console */
const { UsersService, CarritoService } = require('../services');

module.exports = {
  create: async (req, res) => {
    const { id } = req.params;
    try {
      // TICKET
      // 1) Encontrar el usuario por el id que me pasan por params
      const user = await UsersService.findOneById(id);
      // 2) Crear el objeto de POST
      const product = await CarritoService.create(req.body);
      // 3) Agregar post al usuario
      const userWithProduct = await UsersService.addProduct(user, product);
      // 4) Responderle al cliente con el usuario actualizado
      res.status(201).json(userWithProduct);
    } catch (error) {
      res.status(400).json({ message: 'Error add product', error });
    }
  },
};
