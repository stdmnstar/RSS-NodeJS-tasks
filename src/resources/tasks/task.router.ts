const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  try {
    const { boardId } = req.params
    const tasks = await taskService.getAll(boardId);
    res.json(tasks.map(Task.toResponse));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:taskId').get(async (req, res) => {
  try {
    const { boardId, taskId } = req.params;
    const task = await taskService.getById(boardId, taskId);
    res.json(Task.toResponse(task));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/').post(async (req, res) => {
  try {
    const { boardId } = req.params;
    const newTask = new Task({ ...req.body })
    const task = await taskService.create(boardId, { ...newTask, boardId });
    res.status(201).json(Task.toResponse(task));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:taskdId').put(async (req, res) => {
  try {
    const { boardId, taskdId } = req.params;
    const user = await taskService.update(boardId, taskdId, req.body);
    res.json(Task.toResponse(user));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:taskId').delete(async (req, res) => {
  try {
    const { boardId, taskId } = req.params;
    await taskService.remove(boardId, taskId);
    res.status(204).json(`Task is deleted with id = ${taskId}`);
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

export default router;
