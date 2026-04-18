import { Category } from '../../models/Category.js';

export async function listCategories() {
  try {
    const categories = await Category.find();
    return { categories };
  } catch (error) {
    console.error(`${error} - Error on list categories`);
  }
}
