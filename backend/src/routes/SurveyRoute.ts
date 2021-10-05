/**
 *  Api / Survey
 */

import express, { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import SurveyController from '../controllers/SurveyController';

const router = express.Router();

router.get('/', SurveyController.index);

// TODO: May consider divide file to Survey Management and Survey View.
// TODO: Should add AuthMiddleware (check token etc...)
router.post('/', asyncHandler(SurveyController.create));
router.delete('/', asyncHandler(SurveyController.remove));

router.get('/results', asyncHandler(SurveyController.results));

router.get('*', (req: Request, res: Response, next: NextFunction) => {
  /* TODO: error handle */
  next();
});

export default router;
