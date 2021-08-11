const { Router } = require('express');
const movieRouter = Router();
const { createMovie } = require('./movies.controllers');

movieRouter.post('/movies', createMovie);
// movieRouter.get('/movies/:title', findMovie);

module.exports = movieRouter;
