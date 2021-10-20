import { Request, Response, NextFunction } from 'express';
import Result from '../models/ResultModel';
import assert from 'assert';
import Survey from '../models/SurveyModel';

class ResultController {
  public static index(req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'Result control'
    });
  }

  public static async save(req: Request, res: Response, next: NextFunction): Promise<any> {
    const [result] = await Result.findOrCreate({
      where: {
        surveyId: req.body.survey_id,
        ownerId: res.locals.user.id,
      }
    });
    assert(result.surveyId === req.body.survey_id);
    assert(result.ownerId === res.locals.user.id);

    const [n] = await Result.update({
      json: req.body.json
    }, { where: { id: result.id } });
    if (n === 0) {
      return res.send(500).json({ result: 'Internal DB error' });
    }
    return res.send(200).json({ result: 'Success' });
  }

  public static async find(req: Request, res: Response, next: NextFunction): Promise<any> {
    const result = await Result.findOne({ where: { id: req.body.id } });
    if (result === null) {
      return res.status(404).json({ result: 'Result not found' });
    }
    return res.send(200).json({ result: result });
  }

  public static async statistics(req: Request, res: Response, next: NextFunction): Promise<any> {
    const survey = await Survey.findOne({
      where: {
        id: req.body.survey_id,
        ownerId: res.locals.user.id
      },
      include: Result
    });
    if (survey === null) {
      return res.status(404).json({ result: 'Survey not found' });
    }
    var stats: any = {};
    for (var i = 0; i < survey.results.length; i++) {
      var json: any = JSON.parse(survey.results[i].json);
      for (var key in json) {
        if (!(key in stats)) {
          stats[key] = {}
        }
        if (!(json[key] in stats[key])) {
          stats[key][json[key]] = 0
        }
        stats[key][json[key]] += 1
      }
    }
    return res.send(200).json({ result: stats });
  }
}

export default ResultController;
