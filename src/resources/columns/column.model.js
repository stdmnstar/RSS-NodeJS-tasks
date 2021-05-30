const { v4: uuid4 } = require('uuid');

class Column {
  
  constructor({ id = uuid4(), title = 'New title', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse({ id, title, order }) {    
    return { id, title, order };
  }
}

module.exports = Column;
