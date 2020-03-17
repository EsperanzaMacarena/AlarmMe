const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typePlaces = [
    'ATM',
    'BAKERY',
    'BANK',
    'BOOK_STORE',
    'PHARMACY', 
    'DRUGSTORE',
    'BICYCLE_STORE',
    'STORE',
    'SUPERMARKET',
    'PET_STORE'
]

const typeSchema = new Schema({
    description: {
      type: String,
      required: true
    },
    typePlaces: {
      type: [String],
      enum: typePlaces,
      required: true
    }
  })


  module.exports = mongoose.model('Type', typeSchema);