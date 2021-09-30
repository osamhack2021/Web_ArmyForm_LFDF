/**
 *  Auth
 */

import express, { Request, Response, NextFunction } from 'express';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.get('/auth', AuthController.index);

router.get('*', (req: Request, res: Response, next: NextFunction) => {
  /* TODO: error handle */
  next();
});

export default router;
