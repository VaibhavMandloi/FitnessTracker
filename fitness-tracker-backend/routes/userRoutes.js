const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
});

// Update user goals
router.post('/:id/update-goals', async (req, res) => {
  try {
    const { running, sleeping } = req.body;
    const user = await User.findById(req.params.id);
    user.goals.running = running;
    user.goals.sleeping = sleeping;
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update goals' });
  }
});

module.exports = router;
