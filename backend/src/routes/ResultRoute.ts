/**
 *  Api / Result
 */

import express, { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import ResultController from '../controllers/ResultController';

const router = express.Router();

// TODO: May consider divide file to Survey Management and Survey
router.post('/', asyncHandler(ResultController.save));

router.get('*', (req: Request, res: Response, next: NextFunction) => {
  /* TODO: error handle */
  next();
});

export default router;
