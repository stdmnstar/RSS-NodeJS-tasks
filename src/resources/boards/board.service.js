/**
 * Board service module
 * @module Board service repository
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

const boardsRepo = require('./board.memory.repository');

/**
 * The function gets all boards
 * @returns {Promise<Board[]>} 
 */
const getAll = () => boardsRepo.getAll();

/**
 * The function gets board by id 
 * @param {string} id  id of board
 * @returns {Promise<Board>} 
 */
const getById = id => boardsRepo.getById(id);

/**
 * The function creates a Board
 * @param {Board} board  new board
 * @returns {Promise<Board>} 
 */
const create = board => boardsRepo.create(board);

/**
 * The function updates the board
 * @param {string} id board id
 * @param {Board} newBoard new board
 * @returns {Promise<Board>} 
 */
const update = (id, newBoard) => boardsRepo.update(id, newBoard);

/**
 * The function removes the board by id 
 * @param {string} id board id 
 * @returns {void} 
 */
const remove = id => boardsRepo.remove(id);

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
