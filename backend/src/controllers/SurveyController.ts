import { Request, Response, NextFunction } from 'express';
import Survey from '../models/SurveyModel';
//import Unit from '../models/UnitModel';
import User from '../models/UserModel';

class SurveyController {
  public static index(req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'Survey control'
    });
  }

  public static async create(req: Request, res: Response, next: NextFunction): Promise<any> {
    const survey = await Survey.create({
      name: req.body.name,
      json: req.body.json,
      deadline: req.body.deadline,
      ownerId: res.locals.user
    });
    return res.send(200).json({ result: survey.id });
  }

  public static async modify(req: Request, res: Response, next: NextFunction): Promise<any> {
    const [n, _] = await Survey.update({
      name: req.body.name,
      json: req.body.json,
      deadline: req.body.deadline
    },
    { where: { id: req.body.survey_id }});
    if (n === 0) {
      return res.status(404).send('Survey not found');
    }
    return res.send(200).json({ result: 'Success' });
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
    return res.status(200).json({ result: survey.results });
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
    const list = await Survey.findAll({
      attributes: ['name'],
      where: {
        unitId: res.locals.user.armyUnitId
      }
    });
    if (list === null) {
      return res.status(200).send("none");
    }
    const surveyList = list.map((survey) => survey.name);
    return res.status(200).send(surveyList);
  }
}

export default SurveyController;
