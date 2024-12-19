import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { authRoutes } from './modules/auth/auth.routes';
import globalErrorhandler from './middleware/globalErrorhandler';
import notfound from './middleware/notfound';
import { userRotes } from './modules/user/user.routes';
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/user', userRotes);
app.get('/', (req: Request, res: Response) => {
  res.send('hi World!');
});
app.use(globalErrorhandler);
app.use(notfound);
export default app;
