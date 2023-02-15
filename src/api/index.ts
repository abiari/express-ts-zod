import express, { Request, Response } from 'express';

import MessageResponse from '../interfaces/MessageResponse.js';
import emojis from './emojis.js';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req: Request, res: Response) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);

export default router;
