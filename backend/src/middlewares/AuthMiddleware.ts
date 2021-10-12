import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/UserModel';
import AuthConfig from '../configs/AuthConfig';

class AuthMiddleware {
  public static index(req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'this is checkDuplicate test or check Token'
    });
  }

  public static async checkDuplicateUseridOrSerial(req: Request, res: Response, next: NextFunction): Promise<any> {
    User.findOne({
      where: {
        userid: req.body.userid
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Userid is already in use!"
        });
        return;
      }

      User.findOne({
        where: {
          serial: req.body.serial
        }
      }).then(user => {
        if (user) {
          res.status(400).send({
            message: "Failed! Serial is alreday in use!"
          })
          return;
        }
      })
    })
  }

  public static async checkToken(req: any, res: Response, next: NextFunction): Promise<any> {
    let token: any = req.headers["x-access-token"];

    if (!token) {
      return res.status(403).send({
        message: "No token provided!"
      })
    }

    jwt.verify(token, AuthConfig.SECRET, function (err: any, decoded: any) {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!"
        });
      }
      req.userId = decoded.id;
      next();
    })
  }

  // 유저 구분하기
  public static async cadre(req: any, res: Response, next: NextFunction) {
    User.findByPk(req.userId).then(user => {
    })
  }
}

export default AuthMiddleware;
