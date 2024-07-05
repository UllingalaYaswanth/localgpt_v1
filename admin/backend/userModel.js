import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  firebaseUid: { type: String, required: true, unique: true }, // Firebase UID
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailAddress: { type: String, required: true, unique: true },
  role: { type: String, enum: ['users', 'admin', 'developer'], default: 'users' },
  level: { type: Number, default: 1 },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
