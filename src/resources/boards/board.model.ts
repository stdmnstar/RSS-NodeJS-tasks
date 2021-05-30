import {v4 as uuid4} from 'uuid';

interface IBoard {
  id: string;
  title: string;
  columns: object[];
}
class Board implements IBoard {
  
  id: string;

  title: string;

  columns: object[];

  constructor({ id = uuid4(), title = 'New board', columns = [] } = {} as IBoard) {
    this.id = id;
    this.title = title;
    this.columns = [...columns];
  }

  static toResponse(board: Board | null) {
    return board;
  }
}

export default Board;
