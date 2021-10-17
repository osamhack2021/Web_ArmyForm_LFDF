/**
 *  Api / Survey
 */

import express, { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import SurveyController from '../controllers/SurveyController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const router = express.Router();
const checkToken = AuthMiddleware.checkToken;

router.get('/', SurveyController.index);

// TODO: May consider divide file to Survey Management and Survey View.
// TODO: Should add AuthMiddleware (check token etc...)
router.post('/', [checkToken], asyncHandler(SurveyController.create));
router.delete('/', [checkToken], asyncHandler(SurveyController.remove));

router.get('/OwnerSurveyList', [checkToken], asyncHandler(SurveyController.OwnerSuveryList));
router.get('/UnitSurveyList', [checkToken], asyncHandler(SurveyController.UnitSuveryList));

router.get('/results', [checkToken], asyncHandler(SurveyController.results));

router.get('*', (req: Request, res: Response, next: NextFunction) => {
  /* TODO: error handle */
  next();
});

export default router;
