const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  messages: [
    {
      text: String,
      file: { url: String, type: String, name: String },
      voice: { url: String, duration: Number },
      sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      timestamp: Date
    }
  ],
  unreadCount: { type: Number, default: 0 }
}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
