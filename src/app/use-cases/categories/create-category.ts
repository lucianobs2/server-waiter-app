import type { Request, Response } from 'express';
import { Category } from '../../models/Category.js';

export async function createCategory(request: Request, response: Response) {
  const { name, icon } = request.body;

  const category = await Category.create({ name, icon });

  response.json(category);
}
