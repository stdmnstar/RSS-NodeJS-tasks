/**
 * User model
 * @module User model
 */
const { v4: uuid4 } = require('uuid');

/** Class representing a User */
class User {
  /**
  * Create a User.
  * @param id {string} Id of user
  * @param name {string} Name of user
  * @param login {string} login of user
  * @param password {string} password of user
    */
  constructor({
    id = uuid4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Static method that returns valid properties
   * @static
   * @param user {Object} User object
   * @returns {{name, id, login}} name, id, login of User
   */
  static toResponse({ id, name, login }) {
    return { id, name, login };
  }
}

module.exports = User;
