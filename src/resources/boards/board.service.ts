import boardsRepo from './board.memory.repository';
import Board from './board.model';

const getAll = () => boardsRepo.getAll();

const getById = (id: string) => boardsRepo.getById(id);

const create = (board: Board) => boardsRepo.create(board);

const update = (id: string, newBoard: Board) => boardsRepo.update(id, newBoard);

const remove = (id:string) => boardsRepo.remove(id);

export default {
    getAll,
    getById,
    create,
    update,
    remove
};
