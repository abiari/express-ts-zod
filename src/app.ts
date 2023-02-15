import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares.js';
import router from './api/index.js';
import MessageResponse from './interfaces/MessageResponse.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.use('/api/v1', router);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
