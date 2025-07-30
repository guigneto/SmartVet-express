import cookieParser from 'cookie-parser';
import express from 'express';

import {PORT} from './config/env.js';
import connectToDatabase from './database/mongodb.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Welcome to the SmartVet API');
});

app.listen(PORT, 'localhost', async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectToDatabase();
});

export default app;