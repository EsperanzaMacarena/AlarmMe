const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alarmSchema = new Schema({
    createdBy: {
      type: Schema.ObjectId,
      ref: 'User',
      required: true
    },
    type: {
      type: Schema.ObjectId,
      ref: 'Type',
      required: false
    },
    done: {
      type: Boolean
    },
    activated: {
      type: Boolean,
      default:true
    },
    ubication: {
      type: [String]
    }
  })

  module.exports = mongoose.model('Alarm', alarmSchema);