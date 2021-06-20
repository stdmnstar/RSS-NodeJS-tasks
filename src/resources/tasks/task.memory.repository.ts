import { getConnection } from '../../db';
import Task, { ITask } from './task.model';

const repository = getConnection()!.getRepository(Task);

const getAll = async (boardId: string): Promise<ITask[]> => repository.find({ where: { boardId } })

const getById = async (boardId: string, taskId: string): Promise<ITask | undefined> => repository.findOne(taskId, { where: { boardId } })

const create = async (item: ITask): Promise<ITask> => repository.save(item)

const update = async (boardId: string, taskId: string, data: Partial<ITask>): Promise<ITask> => {
  await repository.update(taskId, data)
  const task = await getById(boardId, taskId)
  return task!
}

 const remove = async (taskId: string): Promise<boolean> => {
  const res = await repository.delete(taskId)
  return !!res.affected
}


export default {
  getAll,
  getById,
  create,
  update,
  remove
};
