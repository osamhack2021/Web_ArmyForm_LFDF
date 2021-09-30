import { Request, Response, NextFunction } from 'express';

class SurveyController {
  public static index (req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'Survey controll'
    });
  }
}

export default SurveyController;
