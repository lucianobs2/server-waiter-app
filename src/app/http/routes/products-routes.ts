import { Router } from 'express';

export const productsRoutes = Router();
productsRoutes.get('/products', (request, response) => {
  response.send('ok');
});

productsRoutes.post('/products', (request, response) => {
  response.send('create products');
});

productsRoutes.get('/categories/:categoryId/products', (request, response) => {
  response.send('get products by categories');
});
