const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  try {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:userId').get(async (req, res) => {
  try {
    const { userId } = req.params
    const user = await usersService.getById(userId);
    res.json(User.toResponse(user));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/').post(async (req, res) => {
  try {
    const user = await usersService.create(
      new User({ ...req.body })
    );
    res.status(201).json(User.toResponse(user));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:userId').put(async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await usersService.update(userId, req.body);
    res.json(User.toResponse(user));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:userId').delete(async (req, res) => {
  try {
    const { userId } = req.params;
    await usersService.remove(userId);
    res.status(204).json(`user is deleted with id = ${userId}`);
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

export default router;
