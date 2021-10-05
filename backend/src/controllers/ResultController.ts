import { Request, Response, NextFunction } from 'express';

class ResultController {
  public static index (req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'Result control'
    });
  }

  public static async create (req: Request, res: Response, next: NextFunction): Promise<any> {
    return res.status(200).json({ result: 'Create result' });
  }

  public static async save (req: Request, res: Response, next: NextFunction): Promise<any> {
    return res.status(200).json({ result: 'Save result' });
  }
}

export default ResultController;
