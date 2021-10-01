/**
 *  Api
 */

import express, { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import MainController from '../controllers/MainController';
import SurveyController from '../controllers/SurveyController';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.get('/', MainController.index);

// TODO: Reorganize routing rules to AuthRoute
router.get('/auth', AuthController.index);

// TODO: Should add AuthMiddleware (check duplicate userid etc...)
router.post('/auth/signin', asyncHandler(AuthController.signin));
router.post('/auth/signup', asyncHandler(AuthController.signup));

router.get('/survey', SurveyController.index);

router.get('*', (req: Request, res: Response, next: NextFunction) => {
  /* TODO: error handle */
  next();
});

export default router;
