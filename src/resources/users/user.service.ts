import usersRepo from './user.memory.repository';
import User from './user.model'

const getAll = () => usersRepo.getAll();

const getById = (id: string) => usersRepo.getById(id);

const create = (user: User) => usersRepo.create(user);

const update = (id: string, newUser: User) => usersRepo.update(id, newUser);

const remove = (id: string) => usersRepo.remove(id);

export default {
    getAll,
    getById,
    create,
    update,
    remove
};
