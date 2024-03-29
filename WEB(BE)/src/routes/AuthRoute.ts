/**
 *  Api / Auth
 */

import express, { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import AuthController from '../controllers/AuthController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const router = express.Router();

router.get('/', AuthController.index);

// TODO: Should add AuthMiddleware (check duplicate userid etc...)
router.post('/login', asyncHandler(AuthController.signin));
router.post('/signup', [AuthMiddleware.checkDuplicateUseridOrSerial], asyncHandler(AuthController.signup));

router.get('*', (req: Request, res: Response, next: NextFunction) => {
  /* TODO: error handle */
  next();
});

export default router;
