import { Request, Response, NextFunction } from 'express';

class Main {
  public static index (req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'this is main test'
    });
  }
}

export default Main;
