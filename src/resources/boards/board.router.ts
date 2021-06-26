import { Request, Response, Router } from 'express';
import boardService from './board.service';

const router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  try {
    const boards = await boardService.getAll();
    res.json(boards);

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:boardId').get(async (req: Request, res: Response) => {
  try {
    const { boardId } = req.params;
    const board = await boardService.getById(boardId!);
    if (board) {
      res.json(board);
    }
    res.status(404).json();

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:boardId').put(async (req: Request, res: Response) => {
  try {
    const { boardId } = req.params;
    const board = await boardService.update(boardId!, req.body);
    res.json(board);

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:boardId').delete(async (req: Request, res: Response) => {
  try {
    const { boardId } = req.params;
    const removed = await boardService.remove(boardId!);
    res.status(removed ? 204 : 404).json();

  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  try {
    const board = await boardService.create(req.body);
    res.status(201).json(board);

  } catch ({ message }) {
    res.status(400).send(message);
  }
});

export default router;
