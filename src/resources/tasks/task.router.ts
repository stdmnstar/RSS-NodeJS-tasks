import { Request, Response, Router } from 'express';
import taskService from './task.service';
import Task from './task.model';

const router = Router({ mergeParams: true });

router.route('/').get(async (req: Request, res: Response) => {
  try {
    const { boardId } = req.params;
    const tasks = await taskService.getAll(boardId!);
    res.json(tasks);

  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/:taskId').get(async (req: Request, res: Response) => {
  try {
    const { taskId, boardId } = req.params;
    const task = await taskService.getById(boardId!, taskId!);
    if (task) {
      res.json(task);
    }
    res.status(404).json();

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:taskId').put(async (req: Request, res: Response) => {
  try {
    const { taskId, boardId } = req.params;
    const task = await taskService.update(boardId!, taskId!, req.body);
    res.json(task);

  } catch ({ message }) {
    res.status(400).send(message);
  }
});

router.route('/:taskId').delete(async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    const removed = await taskService.remove(taskId!);
    res.status(removed ? 204 : 404).json();

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  try {
    const { boardId } = req.params;
    const task = await taskService.create(new Task(boardId!, req.body));
    res.status(201).json(task);

  } catch ({ message }) {
    res.status(400).send(message);
  }
});

export default router;
