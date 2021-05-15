const DB = require('../../common/inMemoryDB');

const getAll = async () => DB.getAllUsers();

const getById = async userId => {
  const user = DB.getUserById(userId);
  if (!user) {
    throw new Error(`User id=${userId} was not found`);
  }
  return user;
};

const update = async (userId, newUser) => {
  const user = DB.updateUser(userId, newUser);
  if (!user) {
    throw new Error(`User id=${userId} was not found`);
  }
  return user;
};

const create = async user => DB.createUser(user);

const remove = async userId => {
  const user = DB.getUserById(userId); 
  if (!user) {
    throw new Error(`User id=${userId} was not found`);
  }  
  DB.deleteUser(userId);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
