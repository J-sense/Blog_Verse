import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('hi World!');
});

export default app;