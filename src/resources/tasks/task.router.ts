import { Request, Response, Router } from 'express';
import taskService from './task.service';
import Task from './task.model';

const router = Router({ mergeParams: true });

router.route('/').get(async (req: Request, res: Response) => {
  try {
    const { boardId } = req.params;
    if (typeof boardId === 'string') {
      const tasks = await taskService.getAll(boardId);
      res.json(tasks.map(Task.toResponse));
    }

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:taskId').get(async (req: Request, res: Response) => {
  try {
    const { boardId, taskId } = req.params;
    if (typeof boardId === 'string' && taskId === 'string') {
      const task = await taskService.getById(boardId, taskId);
      res.json(Task.toResponse(task));
    }

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  try {
    const { boardId } = req.params;
    const newTask = new Task({ ...req.body })
    if (typeof boardId === 'string') {
      const task = await taskService.create(boardId, { ...newTask, boardId });
      res.status(201).json(Task.toResponse(task));
    }

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:taskdId').put(async (req: Request, res: Response) => {
  try {
    const { boardId, taskId } = req.params;
    if (typeof boardId === 'string' && taskId === 'string') {
      const user = await taskService.update(boardId, taskId, req.body);
      res.json(Task.toResponse(user));
    }

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:taskId').delete(async (req: Request, res: Response) => {
  try {
    const { boardId, taskId } = req.params;
    if (typeof boardId === 'string' && taskId === 'string') {
      await taskService.remove(boardId, taskId);
      res.status(204).json(`Task is deleted with id = ${taskId}`);
    }

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

export default router;
