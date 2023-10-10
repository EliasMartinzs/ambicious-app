import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  task: { type: String },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
