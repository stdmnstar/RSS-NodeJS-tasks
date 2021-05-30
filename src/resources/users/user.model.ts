import {v4 as uuid4} from 'uuid';

interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}
class User implements IUser {
  
  id: string;

  name: string;

  login: string;

  password: string;

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

  static toResponse(user: User | null) {
    if (!user) return null;
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
