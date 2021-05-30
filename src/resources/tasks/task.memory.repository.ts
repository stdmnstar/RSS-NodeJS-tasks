import DB from '../../common/inMemoryDB';
import Task from './task.model';


const getAll = async (boardId: string) => DB.getAlltasksForBoardId(boardId);

const getById = async (boardId: string, id: string) => {
  const task = DB.getTaskByIdForBoardId(boardId, id);
  if (!task) {
    throw new Error(`Task id=${id} was not found`);
  }
  return task;
};

const update = async (_boardId: string, id: string, newTask: Task) => {
  const task = DB.updateTask(id, newTask);
  if (!task) {
    throw new Error(`Task id=${id} was not found`);
  }
  return task;
};

const create = async (boardId: string, task: Task) => {
  const board = DB.getBoardById(boardId);
  if (!board) {
    throw new Error(`Board id=${boardId} was not found`);
  }
  return DB.createTask(task);
}

const remove = async (_boardId: string, id: string) => {
  const board = DB.getBoardById(id);
  if (!board) {
    throw new Error(`Board id=${id} was not found`);
  }
  DB.deleteTask(id);
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};
