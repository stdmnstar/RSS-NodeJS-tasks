/**
 * Board model
 * @module Board model
 */
const { v4: uuid4 } = require('uuid');

/** Class representing a Board */
class Board {
  /**
   * Create a Board.
   * @param id {string} id of board
   * @param title {string} title of board
   * @param columns {Array} columns of board
   */
  constructor({ id = uuid4(), title = 'New board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = [...columns];
  }

    /**
     * Static method that returns valid properties
     * @static
     * @param board {Object} Board object
     * @returns {{id, title, columns}} id, title, colunms of Board
     */
  static toResponse({ id, title, columns }) {
    return { id, title, columns };
  }
}

module.exports = Board;
