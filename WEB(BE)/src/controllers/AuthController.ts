import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import AuthConfig from '../configs/AuthConfig';
import User from '../models/UserModel';
import UnitUtil from '../utils/UnitUtil';

class AuthController {
  public static index(req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'this is auth test'
    });
  }

  public static async signup(req: Request, res: Response, next: NextFunction): Promise<any> {
    const unit = await UnitUtil.checkUnit(req.body.armyUnit);
    if (unit === null) {
      return res.status(400).json({ result: 'Unit not found' });
    }
    const user = await User.create({
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10),
      name: req.body.name,
      armyType: req.body.armyType,
      armyUnitId: unit.id,
      armyRank: req.body.armyRank,
      serialNumber: req.body.serialNumber
    });
    if (user === null) {
      return res.status(500).json({ result: 'Database error' });
    }
    return res.status(200).json({ result: 'Signup success' });
  }

  public static async signin(req: Request, res: Response, next: NextFunction): Promise<any> {
    const user = await User.findOne({
      where: {
        username: req.body.username
      }
    });
    if (user === null) {
      return res.status(404).json({ result: 'Userid not found' });
    }
    if (!await bcrypt.compare(req.body.password, user.password)) {
      return res.status(401).send({ accessToken: null, message: 'Invalid Password!' });
    }
    const token = jwt.sign({ id: user.id }, AuthConfig.SECRET, {
      expiresIn: 3600
    });

    return res.status(200).send({
      username: user.username,
      id: user.id,
      accessToken: token
    });
  }
}

export default AuthController;
