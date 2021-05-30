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
    const boardID = req.params['boardId'];
    if (typeof boardID === 'string') {
      const board = await boardService.getById(boardID);
      res.status(200).json(board);
    }
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:boardId').put(async (req: Request, res: Response) => {
  try {
    const boardID = req.params['boardId'];
    if (typeof boardID === 'string') {
      const board = await boardService.update(boardID, req.body);
      res.status(200).json(board);
    }
  } catch ({ message }) {
    res.status(404).send(message);
  }
});
router.route('/:boardId').delete(async (req: Request, res: Response) => {
  try {
    const boardID = req.params['boardId'];
    if (typeof boardID === 'string') {
      await boardService.remove(boardID);
      res.sendStatus(204);
    }
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  try {
    const board = await boardService.createBoard(req.body);
    res.status(201).json(board);
  } catch ({ message }) {
    res.status(400).send(message);
  }
});

export default router;
