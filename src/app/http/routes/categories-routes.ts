import { Router } from 'express';

export const categoriesRoutes = Router();
categoriesRoutes.get('/categories', (request, response) => {
  response.send('ok');
});

categoriesRoutes.post('/categories', (request, response) => {
  response.send('create Category');
});
