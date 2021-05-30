import { v4 as uuid4 } from 'uuid';

interface IColumn {
  id: string;
  title: string;
  order: number;

}
class Column implements IColumn {

  id: string;

  title: string;

  order: number;

  constructor({ id = uuid4(), title = 'New title', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse(column: Column) {
    return column;
  }
};

module.exports = Column;
