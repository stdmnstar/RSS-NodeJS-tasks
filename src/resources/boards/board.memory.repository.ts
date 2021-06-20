import { getConnection } from '../../db';
import Board, { IBoard } from './board.model';

const repository = getConnection()!.getRepository(Board);

const getAll = async (): Promise<Array<IBoard>> => repository.find();

const getById = async (boardId: string): Promise<IBoard | undefined> => repository.findOne(boardId);

const create = async (board: IBoard): Promise<IBoard> => repository.save(board)

const update = async (boardId: string, data: Partial<IBoard>): Promise<IBoard> => {
  const { columns, ...otherData } = data
  await repository.update(boardId, otherData)
  const board = await getById(boardId)
  return board!
}

const remove = async (boardId: string): Promise<boolean> => {
  const res = await repository.delete(boardId)
  return !!res.affected
};


export default {
  getAll,
  getById,
  create,
  update,
  remove
};
