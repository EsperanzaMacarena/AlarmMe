import mongoose, { Schema } from 'mongoose'
import { typePlaces } from '.enumTypePlaces'

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
    type: [String]
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

typeSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      description: this.description,
      typePlaces: this.typePlaces,
      ubication: this.ubication,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Type', typeSchema)

export const schema = model.schema
export default model
