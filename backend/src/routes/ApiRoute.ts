/**
 *  Api
 */

import express, { Request, Response, NextFunction } from 'express';
import MainController from '../controllers/MainController';
import SurveyController from '../controllers/SurveyController';

const router = express.Router();

router.get('/', MainController.index);

router.get('/survey', SurveyController.index);

router.get('*', (req: Request, res: Response, next: NextFunction) => {
  /* TODO: error handle */
  next();
});

export default router;
