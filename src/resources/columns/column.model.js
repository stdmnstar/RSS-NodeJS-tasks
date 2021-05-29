/**
 * Column model
 * @module Column model
 */
const { v4: uuid4 } = require('uuid');

/** Class representing a Column */
class Column {
  /**
   * Create a Column.
   * @param id {string} id of column
   * @param title {string} title of column
   * @param order {number} order of column
   */
  constructor({ id = uuid4(), title = 'New title', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

/**
     * Static method that returns valid properties
     * @static
     * @param column {Object} column object
     * @returns {{id, title, order}} id, title, order of column
     */
  static toResponse({ id, title, order }) {    
    return { id, title, order };
  }
}

module.exports = Column;
