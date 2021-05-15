const DB = require('../../common/inMemoryDB');

const getAll = async () => DB.getAllBoards();

const getById = async id => {
  const board = DB.getBoardById(id);
  if (!board) {
    throw new Error(`Board id=${id} was not found`);
  }
  return board;
};

const update = async (id, newBoard) => {
  const board = DB.updateBoard(id, newBoard);
  if (!board) {
    throw new Error(`Board id=${id} was not found`);
  }
  return board;
};

const create = async board => DB.createBoard(board);

const remove = async id => {
  const board = DB.getBoardById(id); 
  if (!board) {
    throw new Error(`Board id=${id} was not found`);
  }  
  DB.deleteBoard(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
