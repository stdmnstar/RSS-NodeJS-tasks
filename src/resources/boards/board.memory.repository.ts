import DB from '../../common/inMemoryDB';
import Board from './board.model';

const getAll = async () => DB.getAllBoards();

const getById = async (id: string) => {
  const board = DB.getBoardById(id);
  if (!board) {
    throw new Error(`Board id=${id} was not found`);
  }
  return board;
};

const update = async (id: string, newBoard: Board) => {
  const board = DB.updateBoard(id, newBoard);
  if (!board) {
    throw new Error(`Board id=${id} was not found`);
  }
  return board;
};

const create = async (board: Board) => DB.createBoard(board);

const remove = async (id: string) => {
  const board = DB.getBoardById(id);
  if (!board) {
    throw new Error(`Board id=${id} was not found`);
  }
  DB.deleteBoard(id);
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};
