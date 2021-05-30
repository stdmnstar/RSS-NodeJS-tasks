import { IUser } from '../resources/users/user.model';
import { IBoard } from '../resources/boards/board.model';
import { ITask } from '../resources/tasks/task.model';

interface IDB {
  Users: IUser[];
  Boards: IBoard[];
  Tasks: ITask[];
}

const DB: IDB = {
  Users: [],
  Boards: [],
  Tasks: [],
};

export default DB
