// const router = require('express').Router();
// const Board = require('./board.model');
// const boardService = require('./board.service');

import { Request, Response, Router } from 'express';
import boardService from './board.service';
import Board from './board.model';

const router = Router();


router.route('/').get(async (_req:Request, res:Response) => {
  try {
    const boards = await boardService.getAll();
    res.json(boards.map(Board.toResponse));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:boardId').get(async (req, res) => {
  try {
    const { boardId } = req.params;
    const board = await boardService.getById(boardId);
    res.json(Board.toResponse(board));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/').post(async (req, res) => {
  try {
    const user = await boardService.create(new Board({ ...req.body }));
    res.status(201).json(Board.toResponse(user));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:boardId').put(async (req, res) => {
  try {
    const { boardId } = req.params;
    const user = await boardService.update(boardId, req.body);
    res.json(Board.toResponse(user));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:boardId').delete(async (req, res) => {
  try {
    const { boardId } = req.params;
    await boardService.remove(boardId);
    res.status(204).json(`Board is deleted with id = ${boardId}`);
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

export default router;

