import taskRepo from './task.memory.repository';
import Task from './task.model';

const getAll = () => taskRepo.getAll();

const getById = (id: string) => taskRepo.getById(id);

const create = (data: Task, boardIdFromParams: string) => taskRepo.create(new Task(data, boardIdFromParams));

const update = (id: string, data: Task) => taskRepo.update(id, new Task(data));

const remove = (id: string) => taskRepo.remove(id);

export default { getAll, getById, create, update, remove };
