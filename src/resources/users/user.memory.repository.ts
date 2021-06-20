import { getConnection } from '../../db';
import User, { IUser } from './user.model';

const repository = getConnection()!.getRepository(User);

const getAll = async () => repository.find()

const getById = async (userId: string) => repository.findOne(userId)

const create = async (user: IUser) => repository.save(user)

const update = async (userId: string, data: Partial<IUser>) => {
  await repository.update(userId, data)
  const user = await getById(userId)
  return user!
}

const remove = async (userId: string) => {
  const res = await repository.delete(userId)
  return !!res.affected
}

export default {
  getAll,
  getById,
  create,
  update,
  remove
};
