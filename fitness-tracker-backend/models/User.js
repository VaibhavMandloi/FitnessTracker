const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  location: String,
  weight: Number,
  height: Number,
  age: Number,
  goals: {
    running: Number,
    sleeping: Number,
  },
  metrics: {
    steps: Number,
    water: Number,
    calories: Number,
    heartRate: Number,
  },
  activity: {
    cardio: Number,
    stretching: Number,
    treadmill: Number,
    strength: Number,
  },
  weeklyActivity: [Number], // Array of steps per day
  monthlyProgress: Number, // Percentage
});

module.exports = mongoose.model('User', userSchema);
