/**
 *  Api
 */

import express, { Request, Response, NextFunction } from 'express';
import MainController from '../controllers/MainController';
import SurveyController from '../controllers/SurveyController';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.get('/', MainController.index);
router.get('/auth', AuthController.index);
router.get('/survey', SurveyController.index);

router.get('*', (req: Request, res: Response, next: NextFunction) => {
  /* TODO: error handle */
  next();
});

export default router;
