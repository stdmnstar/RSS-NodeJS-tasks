import { Request, Response, Router } from 'express';
import userService from './user.service';

const router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    res.json(users);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/:id').get(async (req: Request, res: Response) => {
  try {
    const ID = req.params['id'];
    if (typeof ID === 'string') {
      const user = await userService.getById(ID);
      res.status(200).json(user);
    }
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:id').put(async (req: Request, res: Response) => {
  try {
    const ID = req.params['id'];
    if (typeof ID === 'string') {
      const user = await userService.update(
        ID,
        req.body
      );
      res.status(200).json(user);
    }
  } catch ({ message }) {
    res.status(400).send(message);
  }
});
router.route('/:id').delete(async (req: Request, res: Response) => {
  try {
    const ID = req.params['id'];
    if (typeof ID === 'string') {
      await userService.remove(ID);
      res.sendStatus(200);
    }
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/').post(async (req, res) => {
  try {
    const user = await userService.create(req.body);
    res.status(201).json(user);
  } catch ({ message }) {
    res.status(400).send(message);
  }
});

export default router;
