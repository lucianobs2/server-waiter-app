import { Router } from 'express';
import { createCategory } from '../../use-cases/categories/create-category.js';
import { listCategories } from '../../use-cases/categories/list-categories.js';

export const categoriesRoutes = Router();
categoriesRoutes.get('/categories', listCategories);
categoriesRoutes.post('/categories', createCategory);
