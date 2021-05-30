import {v4 as uuid4} from 'uuid';

export interface ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | null ;
  columnId: string;
}
class Task implements ITask {

  id: string;

  title: string;

  order: number;

  description: string;

  userId: string | null;

  boardId: string | null;

  columnId: string;
  
  constructor({
    id = uuid4(),
    title = 'New task',
    order = 1,
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

  static toResponse(task: Task | null) {
    return task;
  }
}

export default Task;
