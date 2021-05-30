const { v4: uuid4 } = require('uuid');

class User {
  
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

  static toResponse({ id, name, login }) {
    return { id, name, login };
  }
}

export default User;
