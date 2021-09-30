import { Request, Response, NextFunction } from 'express';

class AuthController {
  public static index (req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'this is auth test'
    });
  }
}

export default AuthController;
