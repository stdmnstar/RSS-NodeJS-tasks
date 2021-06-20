import boardRepo from './board.memory.repository';
import { IBoard } from './board.model';

const getAll = async (): Promise<Array<IBoard>> => boardRepo.getAll();

const getById = async (boardId: string): Promise<IBoard | undefined> => boardRepo.getById(boardId);

const create = async (board: IBoard): Promise<IBoard> => boardRepo.create(board);

const update = async (boardId: string, data: Partial<IBoard>): Promise<IBoard> => boardRepo.update(boardId, data);

const remove = async (boardId: string): Promise<boolean> => boardRepo.remove(boardId);

export default { getAll, getById, create, update, remove };
