const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  try {
    const board = await boardService.getById(req.params.boardId);
    res.json(Board.toResponse(board));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/').post(async (req, res) => {
  try {
    const user = await boardService.create(
      new Board({
        title: req.body.title,
        columns: req.body.columns
      })
    );
    res.status(201).json(Board.toResponse(user));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:boardId').put(async (req, res) => {
  try {
    const user = await boardService.update(req.params.boardId, req.body);
    res.json(Board.toResponse(user));
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params;

  try {
    await boardService.remove(boardId);
    res.status(204).json(`Board is deleted with id = ${boardId}`);
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

module.exports = router;
