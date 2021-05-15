const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  try {
    const user = await usersService.getById(req.params.userId);    
    res.json(User.toResponse(user));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(
    new User({
      login: req.body.login,
      name: req.body.name,
      password: req.body.password
    })
  );
  res.status(201).json(User.toResponse(user));
});

router.route('/:userId').put(async (req, res) => {
  try {
    const user = await usersService.update(req.params.userId, req.body);
    res.json(User.toResponse(user));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:userId').delete(async (req, res) => {
  const { userId } = req.params;

  try {
    await usersService.remove(userId);
    res.status(204).json(`user is deleted with id = ${userId}`);
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

module.exports = router;
