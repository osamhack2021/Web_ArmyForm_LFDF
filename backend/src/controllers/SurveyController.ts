import { Request, Response, NextFunction } from 'express';

class SurveyController {
  public static index (req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'Survey controll'
    });
  }

  public static async create (req: Request, res: Response, next: NextFunction): Promise<any> {
    return res.status(200).json({ result: 'Create survey' });
  }

  public static async delete (req: Request, res: Response, next: NextFunction): Promise<any> {
    return res.status(200).json({ result: 'Delete survey' });
  }
}

export default SurveyController;
