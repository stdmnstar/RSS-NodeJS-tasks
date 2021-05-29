/**
 * Task memory repository module
 * @module Task memory repository
 */

/**
 * @typedef  {Object} Task
 * @property {string} id Task id
 * @property {string} title Task title
 * @property {number} order Task order
 * @property {string} description Task description
 * @property {string} userId Task userId
 * @property {string} boardId Task boardId
 * @property {string} columnId Task columnId *  
 */

const DB = require('../../common/inMemoryDB');

/**
 * The function gets all tasks for board id 
 * @param {string} boardId  id of board
 * @returns {Promise<Task[]>} 
 */
const getAll = async boardId => DB.getAlltasksForBoardId(boardId);

/**
 * The function gets task by id for board id
 * @param {string} id  id of task
 * @returns {Promise<Task | null>} 
 */
const getById = async (boardId, id) => {
  const task = DB.getTaskByIdForBoardId(boardId, id);
  if (!task) {
    throw new Error(`Task id=${id} was not found`);
  }
  return task;
};

/**
 * The function updates the task
 * @param {string} id task id
 * @param {Task} newTask new task
 * @returns {Promise<Task>} 
 */
const update = async (boardId, id, newTask) => {
  const task = DB.updateTask(id, newTask);
  if (!task) {
    throw new Error(`Task id=${id} was not found`);
  }
  return task;
};

/**
 * The function creates a new task
 * @param {Task} board  new task
 * @returns {Promise<Task>} 
 */
const create = async (boardId, task) => {
  const board = DB.getBoardById(boardId);
  if (!board) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return DB.createTask(task);
}

/**
 * The function removes the task by id  and board id
 * @param {string} boardId board id 
 * @param {string} id task id 
 * @returns {void} 
 */
const remove = async (boardId, id) => {
  const board = DB.getBoardById(id);
  if (!board) {
    throw new Error(`Board id=${id} was not found`);
  }
  DB.deleteTask(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
