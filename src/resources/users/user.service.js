/**
 * User service module
 * @module User service
 */

/**
 * @typedef  {Object} User
 * @property {string} id User id
 * @property {string} name User name
 * @property {string} login user login
 * @property {string} password user password
 */
const usersRepo = require('./user.memory.repository');

/**
 * The function gets all users 
 * @returns {Promise<User[]>} 
 */
const getAll = () => usersRepo.getAll();

/**
 * The function gets user by id 
 * @param {string} id  id of user
 * @returns {Promise<User>} 
 */
const getById = id => usersRepo.getById(id);

/**
 * The function creates a new user 
 * @param {User} user  new user
 * @returns {Promise<User>} 
 */
const create = user => usersRepo.create(user);

/**
 * The function updates the user 
 * @param {string} id user id
 * @param {User} newUser new user
 * @returns {Promise<User>} 
 */
const update = (id, newUser) => usersRepo.update(id, newUser);

/**
 * The function removes the user by id 
 * @param {string} id user id 
 * @returns {void} 
 */
const remove = id => usersRepo.remove(id);

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
