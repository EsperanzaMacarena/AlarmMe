const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alarmSchema = new Schema({
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: 'Type',
      required: false
    },
    done: {
      type: Boolean
    },
    activated: {
      type: Boolean
    }
  })

  module.exports = mongoose.model('Alarm', alarmSchema);