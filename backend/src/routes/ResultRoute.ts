/**
 *  Api / Result
 */

import express, { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import ResultController from '../controllers/ResultController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const router = express.Router();
const checkToken = AuthMiddleware.checkToken;

// TODO: May consider divide file to Survey Management and Survey
router.post('/', [checkToken], asyncHandler(ResultController.save));
router.post('/stats', [checkToken], asyncHandler(ResultController.statistics));

router.get('*', (req: Request, res: Response, next: NextFunction) => {
  /* TODO: error handle */
  next();
});

export default router;
