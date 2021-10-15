import { Request, Response, NextFunction } from 'express';
import Survey from '../models/SurveyModel';

class SurveyController {
  public static index (req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'Survey control'
    });
  }

  public static async create (req: Request, res: Response, next: NextFunction): Promise<any> {
    const survey = await Survey.create({
      name: req.body.name,
      json: req.body.json,
      owner: req.body.userid
    });
    return res.send(200).json({ result: survey.id });
  }

  public static async remove (req: Request, res: Response, next: NextFunction): Promise<any> {
    return res.status(200).json({ result: 'Remove survey' });
  }

  public static async results (req: Request, res: Response, next: NextFunction): Promise<any> {
    const survey = await Survey.findOne({ where: { id: req.body.id } });
    if (survey === null) {
      return res.status(404).json({ result: 'Survey not found' });
    }
    return res.status(200).json({ result: survey.results });
  }

  public static async surveys (req: Request, res: Response, next: NextFunction): Promise<any> {
    if (req.body.userid) {

    }
    const user = await Survey.findOne({ where: { id: req.body.userid } });
    if (user === null)
    return res.status(200).json({ result: [] });
  }
}

export default SurveyController;
