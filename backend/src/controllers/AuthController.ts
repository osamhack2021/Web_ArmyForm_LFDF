import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import AuthConfig from '../configs/AuthConfig';
import User from '../models/UserModel';

class AuthController {
  public static index (req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'this is auth test'
    });
  }

  public static async signup (req: Request, res: Response, next: NextFunction): Promise<any> {
    const user = await User.create({
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10),
      name: req.body.name,
      armyType: req.body.type,
      armyUnit: req.body.unit,
      armyRank: req.body.rank,
      serialNumber: req.body.serial
    });
    if (user === null) {
      return res.status(500).json({ result: 'Database error' });
    }
    return res.status(200).json({ result: 'Signup success' });
  }

  public static async signin (req: Request, res: Response, next: NextFunction): Promise<any> {
    const user = await User.findOne({
      where: {
        username: req.body.username
      }
    });
    if (user === null) {
      return res.status(404).json({ result: 'Userid not found' });
    }
    if (!await bcrypt.compare(req.body.password, user.password)) {
      return res.status(401).json({ result: 'Invalid passwd' });
    }
    const token = jwt.sign({ userid: user.id }, AuthConfig.SECRET, {
      expiresIn: 3600
    });

    return res.status(200).json({
      result: {
        userid: user.id,
        jsonwebtoken: token
      }
    });
  }
}

export default AuthController;
