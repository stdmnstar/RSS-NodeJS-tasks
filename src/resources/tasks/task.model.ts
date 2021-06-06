import { v4 as uuid4 } from 'uuid';

export interface ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | null | undefined;
  columnId: string;
};

class Task implements ITask {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string | null;

  boardId: string | null | undefined;

  columnId: string;

  constructor(
    {
      id = uuid4(),
      title = 'Task',
      order = 0,
      description = 'description',
      userId = `userId`,
      boardId = `boardId`,
      columnId = `columnId`
    } = {} as ITask,
    boardIdFromParams?: string | null | undefined
  ) {

    this.id = id;
    this.title = title;

    this.order = order;

    this.description = description;

    this.userId = userId;

    if (boardId) this.boardId = boardId
    else if (boardIdFromParams) this.boardId = boardIdFromParams;

    this.columnId = columnId;
  }

  static toResponse(task: Task) {
    return task;
  }
};

export default Task;
