let inMemoryUsers = [];
let inMemoryBoards = [];

let inMemoryTasks = [];

const getAllUsers = async () => inMemoryUsers.slice();
const getAllBoards = async () => inMemoryBoards.slice();
const getAlltasksForBoardId = async id => inMemoryTasks.filter(({ boardId }) => boardId === id);;

const getUserById = async id => inMemoryUsers.filter(el => el.id === id)[0];
const getBoardById = async id => inMemoryBoards.filter(el => el.id === id)[0];
const getTaskByIdForBoardId = async (boardId, id) => {
  const tasks = await getAlltasksForBoardId(boardId);
  const task = tasks.filter((el) => el.id === id)[0];
  return task;
};
  
const createUser = async user => {
  inMemoryUsers.push(user);
  return user;
};

const createBoard = async board => {
  inMemoryBoards.push(board);
  return board;
};

const createTask = async task => {
  inMemoryTasks.push(task);
  return task;
};

const updateUser = async (id, newUser) => {
  const index = inMemoryUsers.findIndex((el) => el.id === id);
  const updatedUser = { id, ...newUser };
  if (index !== -1) {
    inMemoryUsers[index] = updatedUser;
    return updatedUser
  }
  return undefined;
};

const updateBoard = async (id, newBoard) => {
  const index = inMemoryBoards.findIndex((el) => el.id === id);
  const updatedBoard = { id, ...newBoard };
  if (index !== -1) {
    inMemoryBoards[index] = updatedBoard;
    return updatedBoard
  }
  return undefined;
};

const updateTask = async (id, taskData) => {
  const index = inMemoryTasks.findIndex((el) => el.id === id);
  const updatedTask = { id, ...taskData };

  inMemoryTasks[index] = updatedTask;

  return updatedTask;
};

const deleteUser = async id => {
  // TODO await tasksRepo.unassignUserById(userId);
  // DB_TASKS = DB_TASKS.map(task =>
  //   task.userId === userId ? { ...task, userId: null } : task
  // );

  inMemoryUsers = inMemoryUsers.filter((el) => el.id !== id);
};

const deleteBoard = async id => {
  // TODO await tasksRepo.deleteAllByBoardId(id);
  //  DB.tasks = DB.tasks.filter(({ boardId }) => boardId !== id);
  //   
  // );

  inMemoryBoards = inMemoryBoards.filter((el) => el.id !== id);
};

const deleteTask = async id => {
  inMemoryTasks = inMemoryTasks.filter((el) => el.id !== id);
};


module.exports = {
  getAllUsers,
  getAllBoards,
  getAlltasksForBoardId,
  getUserById,
  getBoardById,
  getTaskByIdForBoardId,
  createUser,
  createBoard,
  createTask,
  updateUser,
  updateBoard,
  updateTask,
  deleteUser,
  deleteBoard,
  deleteTask
};
