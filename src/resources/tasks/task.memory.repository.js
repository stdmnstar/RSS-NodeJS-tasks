const DB = require('../../common/inMemoryDB');

const getAll = async boardId => DB.getAlltasksForBoardId(boardId);

const getById = async (boardId, id) => {
  const task = DB.getTaskByIdForBoardId(boardId, id);
  if (!task) {
    throw new Error(`Task id=${id} was not found`);
  }
  return task;
};

const update = async (boardId, id, newTask) => {
  const task = DB.updateTask(id, newTask);
  if (!task) {
    throw new Error(`Task id=${id} was not found`);
  }
  return task;
};

const create = async (boardId, task) => {
  const board = DB.getBoardById(boardId);
  if (!board) {
    throw new Error(`Board id=${boardId} was not found`);
  }

  return DB.createTask(task);
}

const remove = async (boardId, id) => {
  const board = DB.getBoardById(id); 
  if (!board) {
    throw new Error(`Board id=${id} was not found`);
  }  
  DB.deleteTask(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
