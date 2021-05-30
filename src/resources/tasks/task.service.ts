import tasksRepo from './task.memory.repository';
import Task from './task.model';

const getAll = (boardId: string) => tasksRepo.getAll(boardId);

const getById = (boardId: string, id: string) => tasksRepo.getById(boardId, id);

const create = (boardId: string, task: Task) => tasksRepo.create(boardId, task);

const update = (boardId: string, id: string, newTask: Task) => tasksRepo.update(boardId, id, newTask);

const remove = (boardId: string, id: string) => tasksRepo.remove(boardId, id);

export default {
    getAll,
    getById,
    create,
    update,
    remove
};
