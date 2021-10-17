import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/UserModel';
import AuthConfig from '../configs/AuthConfig';
import Survey from '../models/SurveyModel';

class AuthMiddleware {
  public static index(req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'this is checkDuplicate test or check Token'
    });
  }

  public static async checkDuplicateUseridOrSerial(req: Request, res: Response, next: NextFunction): Promise<any> {
    const userByUsername = await User.findOne({
      where: {
        username: req.body.username
      }
    });
    if (userByUsername) {
      return res.status(400).send({
        message: 'Failed! Userid is already in use!'
      });
    }

    const userBySerial = await User.findOne({
      where: {
        serialNumber: req.body.serialNumber
      }
    });
    if (userBySerial) {
      return res.status(400).send({
        message: 'Failed! Serial is alreday in use!'
      });
    }
    next();
  }

  public static async checkToken(req: Request, res: Response, next: NextFunction): Promise<any> {
    const token: any = req.headers['x-access-token'];

    if (!token) {
      return res.status(403).send({
        message: 'No token provided!'
      });
    }

    try {
      const decoded = jwt.verify(token, AuthConfig.SECRET);
      res.locals.user = await User.findOne({
        where: { id: (decoded as any).id },
        include: Survey
      });
      //console.log(res.locals.user);
      next();
    } catch (e) {
      return res.status(401).json('Unauthorized!');
    }
  }

  // 유저 구분하기
  public static async cadre(req: any, res: Response, next: NextFunction) {
    User.findByPk(req.username).then(user => {
    });
  }
}

export default AuthMiddleware;
