const Board = require('../resources/boards/board.model');

let DB_USERS = [
  // new User(), new User(), new User()
];
let DB_BOARDS = [
  new Board(), new Board(), new Board()
];

// const DB_TASKS = [];

const getAllUsers = async () => DB_USERS.slice();
const getAllBoards = async () => DB_BOARDS.slice();

const getUserById = async id => DB_USERS.filter(el => el.id === id)[0];
const getBoardById = async id =>  DB_BOARDS.filter(el => el.id === id)[0];
  // el => el.id === boardId)[0];

const createUser = async user => {
  DB_USERS.push(user);
  return user;
};

const createBoard = async board => {
  DB_BOARDS.push(board);
  return board;
};

const updateUser = async (id, newUser) => {
  const index = DB_USERS.findIndex((el) => el.id === id);
  const updatedUser = { id, ...newUser };
  if (index !== -1) {
    DB_USERS[index] = updatedUser;
    return updatedUser
  }
  return undefined;
};

const updateBoard = async (id, newBoard) => {
  const index = DB_BOARDS.findIndex((el) => el.id === id);
  const updatedBoard = { id, ...newBoard };
  if (index !== -1) {
    DB_BOARDS[index] = updatedBoard;
    return updatedBoard
  }
  return undefined;
};

const deleteUser = async id => {
  // TODO await tasksRepo.unassignUserById(userId);
  // DB_TASKS = DB_TASKS.map(task =>
  //   task.userId === userId ? { ...task, userId: null } : task
  // );

  DB_USERS = DB_USERS.filter((el) => el.id !== id);
};

const deleteBoard = async id => {
  // TODO await tasksRepo.deleteAllByBoardId(id);
  //  DB.tasks = DB.tasks.filter(({ boardId }) => boardId !== id);
  //   
  // );

  DB_BOARDS = DB_BOARDS.filter((el) => el.id !== id);
};


module.exports = {
  getAllUsers,
  getAllBoards,
  getUserById,
  getBoardById,
  createUser,
  createBoard,
  updateUser,
  updateBoard,
  deleteUser,
  deleteBoard
};
