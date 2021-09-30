'use strict';

/* Import Module */
import express from 'express';
import session from 'express-session';
import WebRoute from './routes/WebRoute';
import ApiRoute from './routes/ApiRoute';
import AppConfig from './configs/AppConfig';

class App {
  public express: express.Application;

  constructor () {
    this.express = express();

    this.mountMiddleware();
    this.mountRoutes();
  }

  /**
   * mount all Module
   */

  public mountMiddleware (): void {
    this.express.use(
      session({
        secret: AppConfig.SESSION_SECRET,
        resave: true,
        saveUninitialized: true
        // cookie: { secure: true }
      })
    );
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  /**
   * mount all routes
   */
  public mountRoutes (): void {
    this.express.use('/', WebRoute);
    this.express.use('/api', ApiRoute);
  }

  /**
   * initialize
   */
  public run (): any {
    const port: number = AppConfig.PORT || 3000;

    this.express.listen(port, () => {
      return console.log(`Express server listening at ${port}`);
    }).on('error', (_error:any) => {
      return console.log(_error);
    });
  }
}

export default new App();
