const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typePlaces = [
    "ATM",
    "BAKERY",
    "BANK",
    "BOOK_STORE",
    "PHARMACY", 
    "DRUGSTORE",
    "BICYCLE_STORE",
    "STORE",
    "SUPERMARKET",
    "PET_STORE",
    "UNKNOWN"
]

const typeSchema = new Schema({
    description: {
      type: String
    },
    typePlaces: {
      type: String,
      enum: [typePlaces],
      default: "UNKNOWN"
    },
    ubication: {
      type: String
    }
  })


  module.exports = mongoose.model('Type', typeSchema);