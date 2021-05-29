/**
 * Task service module
 * @module Task service
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

const tasksRepo = require('./task.memory.repository');

/**
 * The function gets all tasks for board id 
 * @param {string} boardId  id of board
 * @returns {Promise<Task[]>} 
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);

/**
 * The function gets task by id for board id
 * @param {string} boardId  id of board
 * @param {string} id  id of task
 * @returns {Promise<Task>} 
 */
const getById = (boardId, id) => tasksRepo.getById(boardId, id);

/**
 * The function creates a new task
 * @param {Task} board  new task
 * @returns {Promise<Task>} 
 */
const create = (boardId, task) => tasksRepo.create(boardId, task);

/**
 * The function updates the task
 * @param {string} id task id
 * @param {Task} newTask new task
 * @returns {Promise<Task>} 
 */
const update = (boardId, id, newBoard) => tasksRepo.update(boardId, id, newBoard);

/**
 * The function removes the task by id  and board id
 * @param {string} boardId board id 
 * @param {string} id task id 
 * @returns {void} 
 */
const remove = (boardId, id) => tasksRepo.remove(boardId, id);

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
