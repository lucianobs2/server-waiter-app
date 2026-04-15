import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { appRoutes } from './http/routes/index.js';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Connection mongo ok');

    const app = express();
    app.use(express.json());
    app.use(appRoutes);
    app.listen(process.env.PORT, () => {
      console.log(`💫 Server is running on port ${process.env.PORT} 💫`);
    });
  })
  .catch(() => console.log('Error on connect mongodb'));
