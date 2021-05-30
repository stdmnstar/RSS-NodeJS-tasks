const DB = require('../../common/inMemoryDB');

const getAll = async () => DB.getAllUsers();

const getById = async id => {
  const user = DB.getUserById(id);
  if (!user) {
    throw new Error(`User id=${id} was not found`);
  }
  return user;
};

const update = async (id, newUser) => {
  const user = DB.updateUser(id, newUser);
  if (!user) {
    throw new Error(`User id=${id} was not found`);
  }
  return user;
};

const create = async user => DB.createUser(user);

const remove = async id => {
  const user = DB.getUserById(id);
  if (!user) {
    throw new Error(`User id=${id} was not found`);
  }
  DB.deleteUser(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
