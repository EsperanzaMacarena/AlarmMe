import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'
import { env } from '../../config'

const roles = ['user', 'admin']


const imgSchema = new Schema({
  data: String, 
  contentType: String
});

const userSchema = new Schema({
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
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

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()

  /* istanbul ignore next */
  const rounds = env === 'test' ? 1 : 9

  bcrypt.hash(this.password, rounds).then((hash) => {
    this.password = hash
    next()
  }).catch(next)
})

userSchema.statics = {
  roles
}

userSchema.plugin(mongooseKeywords, { paths: ['email', 'name'] })

userSchema.methods = {
  view (full) {
    const view = {
      id: this.id,
      name: this.name,
      email:  this.email,
      role: this.role,
      picture: this.picture != null ? '/users/img/' + this.id : null,
    }
    return full ? {
      ...view
    } : view 
  },
  
  authenticate (password) {
    return bcrypt.compare(password, this.password).then((valid) => valid ? this : false)
  }
}

const model = mongoose.model('User', userSchema)

export const schema = model.schema
export default model
