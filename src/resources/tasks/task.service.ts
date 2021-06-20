import taskRepo from './task.memory.repository';
import { ITask } from './task.model';

const getAll = (boardId: string): Promise<ITask[]> => taskRepo.getAll(boardId);

const getById = (boardId: string, taskId: string): Promise<ITask | undefined> => taskRepo.getById(boardId, taskId);

const create = (task: ITask): Promise<ITask> => taskRepo.create(task);

const update = (boardId: string, taskId: string, data: Partial<ITask>): Promise<ITask> =>
    taskRepo.update(boardId, taskId, data);

const remove = (taskId: string): Promise<boolean> => taskRepo.remove(taskId);

export default { getAll, getById, create, update, remove };
