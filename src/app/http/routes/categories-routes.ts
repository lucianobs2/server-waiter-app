import { Router } from 'express';
import { createCategoryController } from '../controllers/categories/create-category-controller.js';
import { listCategoriesController } from '../controllers/categories/list-categories-controller.js';

export const categoriesRoutes = Router();
categoriesRoutes.get('/categories', listCategoriesController);
categoriesRoutes.post('/categories', createCategoryController);
