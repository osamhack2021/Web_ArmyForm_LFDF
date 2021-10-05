import { Request, Response, NextFunction } from 'express';

class SurveyController {
  public static index (req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'Survey control'
    });
  }

  public static async create (req: Request, res: Response, next: NextFunction): Promise<any> {
    return res.status(200).json({ result: 'Create survey' });
  }

  public static async remove (req: Request, res: Response, next: NextFunction): Promise<any> {
    return res.status(200).json({ result: 'Remove survey' });
  }

  public static async results (req: Request, res: Response, next: NextFunction): Promise<any> {
    return res.status(200).json({ result: 'Results' });
  }
}

export default SurveyController;
