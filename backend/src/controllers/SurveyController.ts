import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';
import Survey from '../models/SurveyModel';
import User from '../models/UserModel';

class SurveyController {
  public static index(req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'Survey control'
    });
  }

  public static async save(req: Request, res: Response, next: NextFunction): Promise<any> {
    const [survey, _] = await Survey.findOrCreate({
      where: {
        name: req.body.name,
        ownerId: res.locals.user.id
      },
      defaults: {
        json: req.body.json,
        unitId: res.locals.user.armyUnitId,
        startTime:req.body.startline,
        endTime: req.body.deadline,
      }
    });
    return res.send(200).json({ result: survey.id });
  }

  public static async commit(req: Request, res: Response, next: NextFunction): Promise<any> {
    const [n, _] = await Survey.update({
      startTime: new Date()
    },
    { where: { id: req.body.survey_id }});
    if (n === 0) {
      return res.status(404).send('Survey not found');
    }
    return res.send(200).json({ result: 'Success' });
  }

  public static async remove(req: Request, res: Response, next: NextFunction): Promise<any> {
    return res.status(200).json({ result: 'Remove survey' });
  }

  public static async results(req: Request, res: Response, next: NextFunction): Promise<any> {
    const survey = await Survey.findOne({ where: { id: req.body.survey_id } });
    if (survey === null) {
      return res.status(404).json({ result: 'Survey not found' });
    }
    return res.status(200).json({ result: survey.json });
  }

  public static async OwnerSurveyList(req: Request, res: Response, next: NextFunction): Promise<any> {
    const owner = await User.findOne({
      where: {
        id: res.locals.user.id
      },
      include: Survey
    });
    if (owner === null) {
      return res.status(500).send("Not found survey");
    }

    return res.status(200).send(owner.surveys);
  }

  public static async UnitSurveyList(req: Request, res: Response, next: NextFunction): Promise<any> {
    const time = new Date( (new Date()).getTime() + 9 * 60 * 60 * 1000 );
    const list = await Survey.findAll({
      where: {
        unitId: res.locals.user.armyUnitId,
        startTime: { [Op.lt]: time },
        endTime: { [Op.gt]: time }
      }
    })
    if (list === null) {
      return res.status(200).send("none");
    }
    return res.status(200).send(list);
  }
}

export default SurveyController;
