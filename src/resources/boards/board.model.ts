import { v4 as uuid4 } from 'uuid';

export interface IBoard {
  id: string;
  title: string;
  columns: object[];
}

class Board implements IBoard {

  id: string;

  title: string;

  columns: object[];

  constructor({
    id = uuid4(),
    title = 'boardTemplate',
    columns = [],
  } = {} as IBoard) {

    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: Board) {
    return board;
  }
}

export default Board;
