import type { Request, Response } from 'express';
import { listCategories } from '../../../use-cases/categories/list-categories.js';

export async function listCategoriesController(
  request: Request,
  response: Response,
) {
  const categories = await listCategories();
  return response.json(categories);
}
