/**
 *  Api 
 */


import express, { Request, Response , NextFunction } from 'express';
import MainController from '../controller/Main';
import SurveyController from '../controller/Survey';

const router = express.Router();


router.get('/', MainController.index);

router.get('/survey', SurveyController.index);

router.get("*", (req: Request, res: Response, next: NextFunction) => {
    /* TODO: error handle */
    next();
});

export default router;