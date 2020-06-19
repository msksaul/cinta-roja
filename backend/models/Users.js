/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable consistent-return */
const mogoose = require('mongoose');
const bcrypt = require('bcrypt');
const { CarritoSchema } = require('./Carrito');

const SALT_WORK_FACTOR = 10;

const UsersSchema = new mogoose.Schema({
  first_name: {
    type: String,
    require: true,
    trim: true,
  },
  last_name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  is_admin: {
    type: Boolean,
    default: false,
  },
  // arreglo de productos
  ticketTemporal: [CarritoSchema],
  history: [CarritoSchema],
});

UsersSchema.pre('save', function (next) {
  const user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      return next();
    });
  });
  return false;
});

const Users = mogoose.model('Users', UsersSchema);

module.exports = Users;
