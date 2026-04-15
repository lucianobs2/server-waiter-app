import { Router } from 'express';

export const ordersRoutes = Router();
ordersRoutes.get('/orders', (request, response) => {
  response.send('ok');
});

ordersRoutes.post('/orders', (request, response) => {
  response.send('create orders');
});

ordersRoutes.patch('/orders/:orderId', (request, response) => {
  response.send('get orders by id');
});

ordersRoutes.delete('/orders/:orderId', (request, response) => {
  response.send('delete order');
});
