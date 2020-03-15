import mongoose, { Schema } from 'mongoose'

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
  periocity: {
    type: [String]
  },
  done: {
    type: Boolean
  },
  activated: {
    type: Boolean
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

alarmSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      createdBy: this.createdBy.view(full),
      type: this.type,
      periocity: this.periocity,
      done: this.done,
      activated: this.activated,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Alarm', alarmSchema)

export const schema = model.schema
export default model
