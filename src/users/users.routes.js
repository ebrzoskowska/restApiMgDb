const { Router } = require('express');
const { auth } = require('../middleware');
const userRouter = Router();
const { createUser, findUser, deleteUser, authUser } = require('./users.controllers');

userRouter.post('/users', createUser);

userRouter.get('/users', auth, authUser);
userRouter.post('/users/:username', findUser);
userRouter.delete('/users/:username', deleteUser);

module.exports = userRouter;

