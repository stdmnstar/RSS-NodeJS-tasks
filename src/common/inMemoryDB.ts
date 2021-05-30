import User from "../resources/users/user.model";
import Board from "../resources/boards/board.model";
import Task from "../resources/tasks/task.model";

let inMemoryUsers: User[] = [];
let inMemoryBoards: Board[] = [];
let inMemoryTasks: Task[] = [];

const getAllUsers = async () => inMemoryUsers.slice();

const getAllBoards = async () => inMemoryBoards.slice();

const getAlltasksForBoardId = async (id:string) => inMemoryTasks.filter((task: Task ) => task.boardId === id);

const getUserById = async (id: string) => {
  const user = inMemoryUsers.filter(el => el.id === id)[0];
  if (!user) {
    return null;
  }
  return user;
}

const getBoardById = async (id: string) => {
  const board = inMemoryBoards.filter(el => el.id === id)[0];
  if (!board) {
    return null;
  }
  return board;
}

const getTaskByIdForBoardId = async (boardId: string, id: string) => {
  const tasks = await getAlltasksForBoardId(boardId);
  const task = tasks.filter((el) => el.id === id)[0];
  if (!task) {
    return null;
  }
  return task;
};

const createUser = async (user: User) => {
  inMemoryUsers.push(user);
  return user;
};

const createBoard = async (board: Board) => {
  inMemoryBoards.push(board);
  return board;
};

const createTask = async (task: Task) => {
  inMemoryTasks.push(task);
  return task;
};

const updateUser = async (id: string, newUser: User) => {
  
  inMemoryUsers =  inMemoryUsers.map((el) => {
    if (el.id === id ) {
      return {...el, ...newUser}
    }
    return el
  })
  return getUserById(id);
};

const updateBoard = async (id: string, newBoard: Board) => {
  
  inMemoryBoards =  inMemoryBoards.map((el) => {
    if (el.id === id ) {
      return {...el, ...newBoard}
    }
    return el
  })

  return getBoardById(id);
};

const updateTask = async (boardId: string, id: string, newTask: Task) => {
  
  inMemoryTasks =  inMemoryTasks.map((el) => {
    if (el.id === id ) {
      return {...el, ...newTask}
    }
    return el
  })

  return getTaskByIdForBoardId(boardId, id);
};

const unassignTasksByUserId = async (id: string) => {
  inMemoryTasks = inMemoryTasks.map(task => task.userId === id ? { ...task, userId: null } : task);
}

const deleteUser = async (id: string) => {
  await unassignTasksByUserId(id);
  inMemoryUsers = inMemoryUsers.filter((el) => el.id !== id);
};

const deleteTasksByBoardId = async (id: string) => {
  inMemoryTasks = inMemoryTasks.filter(el => el.boardId !== id);
}

const deleteBoard = async (id: string) => {
  await deleteTasksByBoardId(id);
  inMemoryBoards = inMemoryBoards.filter((el) => el.id !== id);
};

const deleteTask = async (id: string) => {
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
