import DB from '../../common/inMemoryDB';
import Board from './board.model';

const getAll = async () => DB.Boards.map(Board.toResponse);

const getById = async (id: string) => {
  const board = await DB.Boards.filter(el => el.id === id)[0];

  if (!board) throw new Error(`Board id=${id} was not found`);

  return Board.toResponse(board);
};

const create = async (data: Board) => {
  await DB.Boards.push(data);
  return Board.toResponse(data);
};

const update = async (id: string, data: object) => {
  DB.Boards = await DB.Boards.map((el: Board) => {
    if (el.id === id) {
      return { ...el, ...data }
    }
    return el;
  })

  return getById(id);
};

const remove = async (id: string) => {
  DB.Tasks = await DB.Tasks.filter((task) => task.boardId !== id);
  const removeBoard = await getById(id);

  await DB.Boards.forEach((el: Board, i) => {
    if (el.id === id) {
      DB.Boards.splice(i, 1);
    }
  })

  return removeBoard;
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};
