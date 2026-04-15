import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Connection mongo ok');

    const app = express();
    app.listen(process.env.PORT, () => {
      console.log(`💫 Server is running on port ${process.env.PORT} 💫`);
    });
  })
  .catch(() => console.log('Error on connect mongodb'));
