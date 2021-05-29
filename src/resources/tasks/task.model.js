/**
 * Task model
 * @module Task model
 */
const { v4: uuid4 } = require('uuid');

/** Class representing a Task */
class Task {
  /**
   * Create a Task
   * @param id {string} Id of a task
   * @param title {string} Title of a task
   * @param order {number} order of a task
   * @param description {string} description of a task
   * @param userId {string} Id of a user who assigned to task
   * @param boardId {string} Id of a board on which task is located.
   * @param columnId {string} Id of a column in which task is located.
   */
  constructor({
    id = uuid4(),
    title = 'New task',
    order = '1',
    description = 'description',
    userId = '',
    boardId = '',
    columnId = ''
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  /**
   * Static method that returns valid properties
   * @static
   * @param board {Object} Task object
   * @returns {{id, title, order, description, userId, boardId, columnId}} id, title, order, description, user id, board id, column id of Task
   */
  static toResponse({ id, title, order, description, userId, boardId, columnId }) {
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
