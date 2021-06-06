import usersRepo from './user.memory.repository';
import User from './user.model'

const getAll = () => usersRepo.getAll();


const getById = (id: string) => usersRepo.getById(id);

const create = (data: User) => usersRepo.create(new User(data));

const update = (id: string, data: User) => usersRepo.update(id, new User(data));

const remove = (id: string) => usersRepo.remove(id);

export default { getAll, getById, create, update, remove };
