import express from 'express';
import { categoriesRoutes } from './categories-routes.js';
import { ordersRoutes } from './orders-routes.js';
import { productsRoutes } from './products-routes.js';

const appRoutes = express();

appRoutes.use(categoriesRoutes);
appRoutes.use(productsRoutes);
appRoutes.use(ordersRoutes);

export { appRoutes };
