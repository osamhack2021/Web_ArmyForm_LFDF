/**
 *  Api / Auth
 */

import express, { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.get('/', AuthController.index);

// TODO: Should add AuthMiddleware (check duplicate userid etc...)
router.post('/signin', asyncHandler(AuthController.signin));
router.post('/signup', asyncHandler(AuthController.signup));

router.get('*', (req: Request, res: Response, next: NextFunction) => {
  /* TODO: error handle */
  next();
});

export default router;
