import { Request, Response, Router } from 'express';
import taskService from './task.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (_req: Request, res: Response) => {
  try {
    const tasks = await taskService.getAll();
    res.json(tasks);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/:id').get(async (req: Request, res: Response) => {
  try {
    const ID = req.params['id'];
    if (typeof ID === 'string') {
      const task = await taskService.getById(ID);
      res.status(200).json(task);
    }
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:id').put(async (req: Request, res: Response) => {
  try {
    const ID = req.params['id'];
    if (typeof ID === 'string') {
      const task = await taskService.update(ID, req.body);
      res.status(200).json(task);
    }
  } catch ({ message }) {
    res.status(400).send(message);
  }
});
router.route('/:id').delete(async (req: Request, res: Response) => {
  try {
    const ID = req.params['id'];
    if (typeof ID === 'string') {
      await taskService.remove(ID);
      res.sendStatus(200);
    }
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  try {
    const boardID = req.params['boardId'];
    if (typeof boardID === 'string') {
      const task = await taskService.create(
        req.body,
        boardID
      );
      res.status(201).json(task);
    }
  } catch ({ message }) {
    res.status(400).send(message);
  }
});

export default router;
