import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel';

class AuthMiddleware {
  public static index(req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'this is checkDuplicate test'
    });
  }

  public static async checkDuplicateUsernameOrSerial(req: Request, res: Response, next: NextFunction): Promise<any> {
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
}

export default AuthMiddleware;
