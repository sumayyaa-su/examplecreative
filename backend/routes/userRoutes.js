const express = require('express');
const User = require('../model/userData')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// get users by id
  router.get('/user/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id); // Find the user by ID in the database
      if (!user) {
        return res.status(404).json({ message: 'User not found' });  // If no user found, return 404
      }
      res.json(user);  // Return the user data as a JSON response
    } catch (error) {
      res.status(500).json({ error: error.message });  // Return an error if something goes wrong
    }
  });
  
router.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.put('/users/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.delete('/users/:id', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


  module.exports = router;