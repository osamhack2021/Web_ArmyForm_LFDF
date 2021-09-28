/**
 *  Web
 */


import express, { Request, Response , NextFunction } from 'express';
import path from 'path';

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log("hello Web world!");
    res.sendFile(path.join(__dirname, "..", "..", "frontend", "build", "index.html"));
    //next();
});

export default router;