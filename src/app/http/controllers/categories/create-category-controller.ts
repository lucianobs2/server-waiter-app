import type { Request, Response } from 'express';
import { createCategory } from '../../../use-cases/categories/create-category.js';

export async function createCategoryController(
  request: Request,
  response: Response,
) {
  const { name, icon } = request.body;
  const category = await createCategory({ name, icon });
  return response.status(201).json(category);
}
