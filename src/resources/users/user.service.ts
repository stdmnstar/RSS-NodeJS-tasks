import usersRepo from './user.memory.repository';
import { IUser } from './user.model';

const getAll = async (): Promise<IUser[]> => usersRepo.getAll();

const getById = async (userId: string): Promise<IUser | undefined> => usersRepo.getById(userId);

const create = async (user: IUser): Promise<IUser> => usersRepo.create(user);

const update = async (userId: string, data: Partial<IUser>): Promise<IUser> => usersRepo.update(userId, data);

const remove = async (userId: string): Promise<boolean> => usersRepo.remove(userId);

export default { getAll, getById, create, update, remove };
