import mongoose from 'mongoose';

// User Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  email: {
    type: String,
    trim: true,
    unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  password: {
    type: String,
    required: 'Password is required',
    minlength: [6, 'Password must be at least 6 characters long']
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

// Export User Model
const User = mongoose.model('User', UserSchema);
export { User };
export default User;