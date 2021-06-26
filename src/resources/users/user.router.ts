import { Request, Response, Router } from 'express';
import userService from './user.service';
import User from './user.model';

const router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    res.json(users.map(User.toResponse));

  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/:userId').get(async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await userService.getById(userId!);

    if (user) {
      res.json(User.toResponse(user));
    }
    res.status(404).json();

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:userId').put(async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await userService.update(userId!, req.body);
    res.json(User.toResponse(user));

  } catch ({ message }) {
    res.status(400).send(message);
  }
});

router.route('/:userId').delete(async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const removed = await userService.remove(userId!);
    res.status(removed ? 204 : 404).json();

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/').post(async (req, res) => {
  try {
    const user = await userService.create(new User(req.body));
    res.status(201).json(User.toResponse(user));

  } catch ({ message }) {
    res.status(400).send(message);
  }
});

export default router;
