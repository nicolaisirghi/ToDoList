import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.get('/', (_: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(express.json());
app.use(cors());

app.use(router);

app.use(morgan('dev'));

app.listen(port, async () => {
  const MONGO_URI = process.env.MONGO_URI ?? '';

  if (!MONGO_URI) {
    throw new Error('No mongo URI found!');
  }
  await mongoose.connect(MONGO_URI).then(() => console.log('DB Connected')).catch((err) => console.log(err));

  console.log(`⚡️[server]: Server is running ON PORT ${port}`);
});