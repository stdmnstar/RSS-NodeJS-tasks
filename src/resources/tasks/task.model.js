const { v4: uuid4 } = require('uuid');

class Task {
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

  static toResponse({ id, title, order, description, userId, boardId, columnId }) {
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
