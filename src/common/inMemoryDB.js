let DB_USERS = [
  // new User(), new User(), new User()
];

// const DB_TASKS = [];

const getAllUsers = async () => DB_USERS.slice();

const getUserById = async userId => DB_USERS.filter(el => el.id === userId)[0];

const createUser = async user => {
  DB_USERS.push(user);
  return user;
};

const updateUser = async (userId, newUser) => {
  const index = DB_USERS.findIndex(({id}) => id === userId);
  const updatedUser = { id: userId, ...newUser };
  if (index !== -1) {
    DB_USERS[index] = updatedUser;
    return updatedUser
  }
  return undefined;
};

const deleteUser = async userId => {
  // TODO await tasksRepo.unassignUserById(userId);
  // DB_TASKS = DB_TASKS.map(task =>
  //   task.userId === userId ? { ...task, userId: null } : task
  // );

  DB_USERS = DB_USERS.filter(({ id }) => id !== userId);
};


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
