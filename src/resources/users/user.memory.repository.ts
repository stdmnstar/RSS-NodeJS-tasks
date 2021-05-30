import DB from '../../common/inMemoryDB';
import User from './user.model';

const getAll = async () => {
  const allUsers = await DB.Users.map(User.toResponse);
  return allUsers;
}

const getById = async (id: string) => {
  const user = await DB.Users.find((el: User) => el.id === id);
  if (!user) throw new Error('User not found');
  return User.toResponse(user);
};

const create = async (data: User) => {
  await DB.Users.push(data)
  return User.toResponse(data);
}

const update = async (id: string, data: object) => {
  DB.Users = await DB.Users.map((el: User) => {
    if (el.id === id) {
      return { ...el, ...data }
    }
    return el
  })
  const updatedUser = await getById(id);
  return updatedUser;
}

const remove = async (id: string) => {

  DB.Tasks = await DB.Tasks.map((el) =>
    el.userId === id ? { ...el, userId: null } : el
  );

  const removeUser = await { ...getById(id) };
  await DB.Users.forEach((el: User, i) => {
    if (el.id === id) {
      DB.Users.splice(i, 1);
    }
  })
  return removeUser;
}

export default { getAll, getById, create, update, remove };
