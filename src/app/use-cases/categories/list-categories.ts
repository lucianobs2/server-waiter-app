import { Category } from '../../models/Category.js';

export async function listCategories() {
  const categories = await Category.find();
  return categories;
}
