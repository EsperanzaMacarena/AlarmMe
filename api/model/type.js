const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeSchema = new Schema({
    description: {
      type: String,
      required: true
    },
    places: {
      type: String,
      enum:  [
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
    ],
      required: true
    }
  })


  module.exports = mongoose.model('Type', typeSchema);