import DB from '../../common/inMemoryDB';
import Task from './task.model';

const getAll = async () => DB.Tasks.map(Task.toResponse);

const getById = async (id: string) => {
  const task = await DB.Tasks.filter(el => el.id === id)[0];

  if (!task) throw new Error(`Task id=${id} was not found`);

  return Task.toResponse(task);
};

const create = async (data: Task) => {
  await DB.Tasks.push(data);

  return Task.toResponse(data);
};

const update = async (id: string, data: object) => {
  DB.Tasks = await DB.Tasks.map((el: Task) => {
    if (el.id === id) {
      return { ...el, ...data }
    }
    return el
  })

  return getById(id);
};

const remove = async (id: string) => {
  const removeTask = await getById(id);

  await DB.Tasks.forEach((el: Task, i) => {
    if (el.id === id) {
      DB.Tasks.splice(i, 1);
    }
  })

  return removeTask;
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};
