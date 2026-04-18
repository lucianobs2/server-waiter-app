import { Category } from '../../models/Category.js';

interface IRequest {
  name: string;
  icon: string;
}

interface IResponse {
  category: {
    name: string;
    icon: string;
  };
}

export async function createCategory({
  name,
  icon,
}: IRequest): Promise<IResponse> {
  try {
    const category = await Category.create({ name, icon });
    return { category };
  } catch (error) {
    console.error(error);
    throw new Error('Internal server error');
  }
}
