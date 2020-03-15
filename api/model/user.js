const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roles = ['user', 'admin']

const imgSchema = new Schema({
    data: String, 
    contentType: String
  });

  const userSchema = new Schema({
    email: {
      type: String,
      match: /^\S+@\S+.\S+$/,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    name: {
      type: String,
      index: true,
      trim: true
    },
    role: {
      type: String,
      enum: roles,
      default: 'user'
    },
    picture: imgSchema,
  }, {
    timestamps: true
  })

  module.exports = mongoose.model('User', userSchema);