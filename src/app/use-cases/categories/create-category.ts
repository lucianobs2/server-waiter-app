import { Category } from '../../models/Category.js';

interface IRequest {
  name: string;
  icon: string;
}

export async function createCategory({ name, icon }: IRequest) {
  try {
    const category = await Category.create({ name, icon });
    return { category };
  } catch (error) {
    console.error(`${error} - error on create category`);
  }
}
