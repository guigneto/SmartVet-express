import cookieParser from 'cookie-parser';
import express from 'express';

import {PORT} from './config/env.js';
import connectToDatabase from './database/mongodb.js';

import userRouter from './routes/user.routes.js';
import animalRouter from './routes/animal.routes.js';
import appointmentRouter from './routes/appointment.routes.js';
import authRouter from './routes/auth.routes.js';
import errorMiddleware from './middlewares/error.middleware.js';
import authorize from './middlewares/auth.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/SmartVet/auth',authRouter);

app.use('/api/SmartVet/users', userRouter);
app.use('/api/SmartVet/animals',authorize, animalRouter);
app.use('/api/SmartVet/appointments', authorize, appointmentRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('Welcome to the SmartVet API');
});

app.listen(PORT, 'localhost', async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectToDatabase();
});

export default app;