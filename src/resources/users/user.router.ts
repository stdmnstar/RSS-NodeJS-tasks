import { Request, Response, Router } from 'express';
import usersService from './user.service';
import User from './user.model';

const router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  try {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:userId').get(async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (typeof userId === 'string') {
      const user = await usersService.getById(userId);
      res.json(User.toResponse(user));
    }

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  try {
    const user = await usersService.create(
      new User({ ...req.body })
    );
    res.status(201).json(User.toResponse(user));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:userId').put(async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (typeof userId === 'string') {
      const user = await usersService.update(userId, req.body);
      res.json(User.toResponse(user));
    }

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:userId').delete(async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (typeof userId === 'string') {
      await usersService.remove(userId);
      res.status(204).json(`user is deleted with id = ${userId}`);
    }

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

export default router;
