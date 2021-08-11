const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  actor: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  watched: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie; 
