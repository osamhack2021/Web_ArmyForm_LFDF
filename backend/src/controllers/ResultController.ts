import { Request, Response, NextFunction } from 'express';
import { updateLanguageServiceSourceFile } from 'typescript';
import Result from '../models/ResultModel';

class ResultController {
  public static index (req: Request, res: Response, next: NextFunction): any {
    return res.json({
      msg: 'Result control'
    });
  }

  public static async create (req: Request, res: Response, next: NextFunction): Promise<any> {
    const result = await Result.create({
      json: req.body.json,
      survey: req.body.survey,
      owner: req.body.owner
    });
    return res.send(200).json({ result: result.id });
  }

  public static async save (req: Request, res: Response, next: NextFunction): Promise<any> {
    findOrCreate()
    
    await Result.update({
      json: req.body.json
    },
    { where: { id: req.body.id } } );
    return res.send(200).json({ result: req.body.id });
  }

  public static async find (req: Request, res: Response, next: NextFunction): Promise<any> {
    const result = await Result.findOne({ where: { id: req.body.id } });
    if (result === null) {
      return res.status(404).json({ result: 'Result not found' });
    }
    return res.send(200).json({ result: result });
  }
}

export default ResultController;
