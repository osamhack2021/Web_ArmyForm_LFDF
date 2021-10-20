/**
 *  Api
 */

import express, { Request, Response, NextFunction } from 'express';
import MainController from '../controllers/MainController';
import AuthRoute from './AuthRoute';
import SurveyRoute from './SurveyRoute';
import ResultRoute from './ResultRoute';

const router = express.Router();

router.get('/', MainController.index);

// TODO: Reorganize routing rules to AuthRoute
router.use('/auth', AuthRoute);
router.use('/survey', SurveyRoute);
router.use('/result', ResultRoute);

router.get('*', (req: Request, res: Response, next: NextFunction) => {
  /* TODO: error handle */
  next();
});

export default router;
