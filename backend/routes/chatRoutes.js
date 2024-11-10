const express = require('express');
const router = express.Router();
const Chat = require('../model/chatData');
const User = require('../model/userData');
const multer = require('multer');
const upload = multer({ dest: './uploads' });

// Create a new chat
router.post('/new', async (req, res) => {
  try {
    const { participants } = req.body;
    const chat = new Chat({ participants });
    await chat.save();
    res.send(`Chat created successfully!`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Send a message
router.post('/message', upload.single('file'), async (req, res) => {
  try {
    const { chatId, text } = req.body;
    const file = req.file;
    const chat = await Chat.findById(chatId);
    chat.messages.push({
      text,
      file: file ? { url: file.path, type: file.mimetype, name: file.originalname } : null,
      sender: req.user._id,
    });
    await chat.save();
    res.send(`Message sent successfully!`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get chat messages
router.get('/messages/:chatId', async (req, res) => {
  try {
    const chatId = req.params.chatId;
    const chat = await Chat.findById(chatId).populate('participants');
    res.json(chat.messages);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update unread count
router.patch('/unread/:chatId', async (req, res) => {
  try {
    const chatId = req.params.chatId;
    const userId = req.user._id;
    const chat = await Chat.findById(chatId);
    chat.unreadCount = chat.participants.length - 1;
    await chat.save();
    res.send(`Unread count updated successfully!`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete chat
router.delete('/:chatId', async (req, res) => {
  try {
    const chatId = req.params.chatId;
    await Chat.findByIdAndDelete(chatId);
    res.send(`Chat deleted successfully!`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

