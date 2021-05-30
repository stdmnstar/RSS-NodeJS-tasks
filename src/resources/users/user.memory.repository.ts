import DB from '../../common/inMemoryDB';
import User from './user.model';

const getAll = async () => DB.getAllUsers();

const getById = async (id: string) => {
  const user = DB.getUserById(id);
  if (!user) {
    throw new Error(`User id=${id} was not found`);
  }
  return user;
};

const update = async (id: string, newUser: User) => {
  const user = DB.updateUser(id, newUser);
  if (!user) {
    throw new Error(`User id=${id} was not found`);
  }
  return user;
};

const create = async (user: User) => DB.createUser(user);

const remove = async (id: string) => {
  const user = DB.getUserById(id);
  if (!user) {
    throw new Error(`User id=${id} was not found`);
  }
  DB.deleteUser(id);
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};
