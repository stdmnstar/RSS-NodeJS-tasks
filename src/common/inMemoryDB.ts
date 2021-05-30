let inMemoryUsers = [];
let inMemoryBoards = [];
let inMemoryTasks = [];

const getAllUsers = async () => inMemoryUsers.slice();

const getAllBoards = async () => inMemoryBoards.slice();

const getAlltasksForBoardId = async id => inMemoryTasks.filter(({ boardId }) => boardId === id);

const getUserById = async id => {
  const user = inMemoryUsers.filter(el => el.id === id)[0];
  if (!user) {
    return null;
  }
  return user;
}

const getBoardById = async id => {
  const board = inMemoryBoards.filter(el => el.id === id)[0];
  if (!board) {
    return null;
  }
  return board;
}

const getTaskByIdForBoardId = async (boardId, id) => {
  const tasks = await getAlltasksForBoardId(boardId);
  const task = tasks.filter((el) => el.id === id)[0];
  if (!task) {
    return null;
  }
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
  }
  return getUserById(id);
};

const updateBoard = async (id, newBoard) => {
  const index = inMemoryBoards.findIndex((el) => el.id === id);
  const updatedBoard = { id, ...newBoard };
  if (index !== -1) {
    inMemoryBoards[index] = updatedBoard;
  }
  return getBoardById(id);
};

const updateTask = async (id, newTask) => {
  const index = inMemoryTasks.findIndex((el) => el.id === id);
  const updatedTask = { id, ...newTask };
  if (index !== -1) {
    inMemoryTasks[index] = updatedTask;
  }
  return updatedTask;
};

const unassignTasksByUserId = async id => {
  inMemoryTasks = inMemoryTasks.map(task => task.userId === id ? { ...task, userId: null } : task);
}

const deleteUser = async id => {
  await unassignTasksByUserId(id);
  inMemoryUsers = inMemoryUsers.filter((el) => el.id !== id);
};

const deleteTasksByBoardId = async id => {
  inMemoryTasks = inMemoryTasks.filter(el => el.boardId !== id);
}

const deleteBoard = async id => {
  await deleteTasksByBoardId(id);
  inMemoryBoards = inMemoryBoards.filter((el) => el.id !== id);
};

const deleteTask = async id => {
  inMemoryTasks = inMemoryTasks.filter((el) => el.id !== id);
};

export default {
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
