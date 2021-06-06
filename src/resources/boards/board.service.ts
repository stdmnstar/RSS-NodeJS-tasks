import boardRepo from './board.memory.repository';
import Board from './board.model';

const getAll = () => boardRepo.getAll();

const getById = (id: string) => boardRepo.getById(id);

const createBoard = (data: Board) => boardRepo.create(new Board(data));

const update = (id: string, data: Board) => boardRepo.update(id, new Board(data));

const remove = (id: string) => boardRepo.remove(id);

export default { getAll, getById, createBoard, update, remove };
