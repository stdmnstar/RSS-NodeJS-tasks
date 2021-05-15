const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = userId => usersRepo.getById(userId);
const create = user => usersRepo.create(user);

const update = (userId, newUser) => usersRepo.update(userId, newUser);

const remove = userId => usersRepo.remove(userId);

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
