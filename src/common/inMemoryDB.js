/**
 * Memory DB module
 * @module inMemoryDB
 */

/**
 * @typedef  {Object} Task
 * @property {string} id Task id
 * @property {string} title Task title
 * @property {number} order Task order
 * @property {string} description Task description
 * @property {string} userId Task userId
 * @property {string} boardId Task boardId
 * @property {string} columnId Task columnId *  
 */

/**
 * @typedef  {Object} Column
 * @property {string} id Column id
 * @property {string} title Column title
 * @property {number} order Column order
 */

/**
 * @typedef  {Object} Board
 * @property {string} id Board id
 * @property {string} title Board title
 * @property {Array<Column>} colums array of Board`s columns
 */

/**
 * @typedef  {Object} User
 * @property {string} id User id
 * @property {string} name User name
 * @property {string} login user login
 * @property {string} password user password
 */


let inMemoryUsers = [];
let inMemoryBoards = [];
let inMemoryTasks = [];

/**
 * The function gets all users 
 * @returns {Promise<User[]>} 
 */
const getAllUsers = async () => inMemoryUsers.slice();

/**
 * The function gets all boards
 * @returns {Promise<Board[]>} 
 */
const getAllBoards = async () => inMemoryBoards.slice();

/**
 * The function gets all tasks for board id 
 * @param {string} id  id of board
 * @returns {Promise<Task[]>} 
 */
const getAlltasksForBoardId = async id => inMemoryTasks.filter(({ boardId }) => boardId === id);

/**
 * The function gets user by id 
 * @param {string} id  id of user
 * @returns {Promise<User | null>} 
 */
const getUserById = async id => {
  const user = inMemoryUsers.filter(el => el.id === id)[0];
  if (!user) {
    return null;
  }
  return user;
}

/**
 * The function gets board by id 
 * @param {string} id  id of board
 * @returns {Promise<Board | null>} 
 */
const getBoardById = async id => {
  const board = inMemoryBoards.filter(el => el.id === id)[0];
  if (!board) {
    return null;
  }
  return board;
}

/**
 * The function gets task by id for board id
 * @param {string} boardId  id of board
 * @param {string} id  id of task
 * @returns {Promise<Task | null>} 
 */
const getTaskByIdForBoardId = async (boardId, id) => {
  const tasks = await getAlltasksForBoardId(boardId);
  const task = tasks.filter((el) => el.id === id)[0];
  if (!task) {
    return null;
  }
  return task;
};

/**
 * The function creates a new user 
 * @param {User} user  new user
 * @returns {Promise<User>} 
 */
const createUser = async user => {
  inMemoryUsers.push(user);
  return user;
};

/**
 * The function creates a Board
 * @param {Board} board  new board
 * @returns {Promise<Board>} 
 */
const createBoard = async board => {
  inMemoryBoards.push(board);
  return board;
};

/**
 * The function creates a new task
 * @param {Task} board  new task
 * @returns {Promise<Task>} 
 */
const createTask = async task => {
  inMemoryTasks.push(task);
  return task;
};

/**
 * The function updates the user 
 * @param {string} id user id
 * @param {User} newUser new user
 * @returns {Promise<User | null>} 
 */
const updateUser = async (id, newUser) => {
  const index = inMemoryUsers.findIndex((el) => el.id === id);
  const updatedUser = { id, ...newUser };
  if (index !== -1) {
    inMemoryUsers[index] = updatedUser;
  }
  return getUserById(id);
};

/**
 * The function updates the board
 * @param {string} id board id
 * @param {Board} newBoard new board
 * @returns {Promise<Board | null>} 
 */
const updateBoard = async (id, newBoard) => {
  const index = inMemoryBoards.findIndex((el) => el.id === id);
  const updatedBoard = { id, ...newBoard };
  if (index !== -1) {
    inMemoryBoards[index] = updatedBoard;
  }
  return getBoardById(id);
};

/**
 * The function updates the task
 * @param {string} id task id
 * @param {Task} newTask new task
 * @returns {Promise<Task | null>} 
 */
const updateTask = async (id, newTask) => {
  const index = inMemoryTasks.findIndex((el) => el.id === id);
  const updatedTask = { id, ...newTask };
  if (index !== -1) {
    inMemoryTasks[index] = updatedTask;
  }
  return updatedTask;
};

/**
 * The function unassigns tasks for the user  
 * @param {string} id user id 
 * @returns {void} 
 */
const unassignTasksByUserId = async id => {
  inMemoryTasks = inMemoryTasks.map(task => task.userId === id ? { ...task, userId: null } : task);
}

/**
 * The function removes the user by id 
 * @param {string} id user id 
 * @returns {void} 
 */
const deleteUser = async id => {
  await unassignTasksByUserId(id);
  inMemoryUsers = inMemoryUsers.filter((el) => el.id !== id);
};

/**
 * The function removes tasks for boatd
 * @param {string} id board id 
 * @returns {void} 
 */
const deleteTasksByBoardId = async id => {
  inMemoryTasks = inMemoryTasks.filter(el => el.boardId !== id);
}

/**
 * The function removes the board by id 
 * @param {string} id board id 
 * @returns {void} 
 */
const deleteBoard = async id => {
  await deleteTasksByBoardId(id);
  inMemoryBoards = inMemoryBoards.filter((el) => el.id !== id);
};

/**
 * The function removes the task by id 
 * @param {string} id task id 
 * @returns {void} 
 */
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
