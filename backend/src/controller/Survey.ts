import { Request, Response , NextFunction } from 'express';

class Survey {
    public static index(req: Request, res: Response, next: NextFunction): any {
        return res.json({
            msg:"Survey controll"
        })
    }

}

export default Survey;