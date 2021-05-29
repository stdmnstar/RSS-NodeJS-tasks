/**
 * Board memory repository module
 * @module Board memory repository
 */
/**
 * @typedef  {Object} Board
 * @property {string} id Board id
 * @property {string} title Board title
 * @property {Array<Column>} colums array of Board`s columns
 */
/**
 * @typedef  {Object} Column
 * @property {string} id Column id
 * @property {string} title Column title
 * @property {number} order Column order
 */

const DB = require('../../common/inMemoryDB');

/**
 * The function gets all boards
 * @returns {Promise<Board[]>} 
 */
const getAll = async () => DB.getAllBoards();

/**
 * The function gets board by id 
 * @param {string} id  id of board
 * @returns {Promise<Board>} 
 */
const getById = async id => {
  const board = DB.getBoardById(id);
  if (!board) {
    throw new Error(`Board id=${id} was not found`);
  }
  return board;
};

/**
 * The function updates the board
 * @param {string} id board id
 * @param {Board} newBoard new board
 * @returns {Promise<Board>} 
 */
const update = async (id, newBoard) => {
  const board = DB.updateBoard(id, newBoard);
  if (!board) {
    throw new Error(`Board id=${id} was not found`);
  }
  return board;
};

/**
 * The function creates a Board
 * @param {Board} board  new board
 * @returns {Promise<Board>} 
 */
const create = async board => DB.createBoard(board);

/**
 * The function removes the board by id 
 * @param {string} id board id 
 * @returns {void} 
 */
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
