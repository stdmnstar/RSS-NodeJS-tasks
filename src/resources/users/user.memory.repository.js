/**
 * User memory repository module
 * @module User memory repository
 */

/**
 * @typedef  {Object} User
 * @property {string} id User id
 * @property {string} name User name
 * @property {string} login user login
 * @property {string} password user password
 */

const DB = require('../../common/inMemoryDB');

/**
 * The function gets all users 
 * @returns {Promise<User[]>} 
 */
const getAll = async () => DB.getAllUsers();

/**
 * The function gets user by id 
 * @param {string} id  id of user
 * @returns {Promise<User>} 
 */
const getById = async id => {
  const user = DB.getUserById(id);
  if (!user) {
    throw new Error(`User id=${id} was not found`);
  }
  return user;
};

/**
 * The function updates the user 
 * @param {string} id user id
 * @param {User} newUser new user
 * @returns {Promise<User>} 
 */
const update = async (id, newUser) => {
  const user = DB.updateUser(id, newUser);
  if (!user) {
    throw new Error(`User id=${id} was not found`);
  }
  return user;
};

/**
 * The function creates a new user 
 * @param {User} user  new user
 * @returns {Promise<User>} 
 */
const create = async user => DB.createUser(user);

/**
 * The function removes the user by id 
 * @param {string} id user id 
 * @returns {void} 
 */
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
