const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = id => usersRepo.getById(id);

const create = user => usersRepo.create(user);

const update = (id, newUser) => usersRepo.update(id, newUser);

const remove = id => usersRepo.remove(id);

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
