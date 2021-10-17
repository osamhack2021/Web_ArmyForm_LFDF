'use strict';

/* Import Module */
import express from 'express';
import session from 'express-session';
import { Sequelize } from 'sequelize-typescript';
import AppConfig from './configs/AppConfig';
import DatabaseConfig from './configs/DatabaseConfig';
import WebRoute from './routes/WebRoute';
import ApiRoute from './routes/ApiRoute';

import User from './models/UserModel';
import Survey from './models/SurveyModel';
import Result from './models/ResultModel';
import Unit from './models/UnitModel';

/*
import UnitUtil from './utils/UnitUtil';
import SurveyUtil from './utils/SurveyUtil';
import bcrypt from 'bcrypt';
*/

/* Make Test Set */
import MakeTestSample from './MakeTestSample';

const cors = require('cors');

class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.mountDatabase();
    this.mountMiddleware();
    this.mountRoutes();
  }

  public mountDatabase(): void {
    const sequelize = new Sequelize({
      database: DatabaseConfig.DATABASE,
      dialect: 'postgres',
      username: DatabaseConfig.USERNAME,
      password: DatabaseConfig.PASSWORD,
      host: 'localhost',
    });

    sequelize.addModels([User, Survey, Result, Unit]);
    //{ force: true }
    sequelize.sync({ force: true }).then(async () => {
      await MakeTestSample.TestSet1()
      await MakeTestSample.TestSet2()
      await MakeTestSample.TestSet3()
      return 
    });
  }

  /**
   * mount all Module
   */

  public mountMiddleware(): void {
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
    this.express.use(cors());
  }

  /**
   * mount all routes
   */
  public mountRoutes(): void {
    this.express.use('/', WebRoute);
    this.express.use('/api', ApiRoute);
  }

  /**
   * initialize
   */
  public run(): any {
    const port: number = AppConfig.PORT || 4000;

    this.express.listen(port, () => {
      return console.log(`Express server listening at ${port}`);
    }).on('error', (_error: any) => {
      return console.log(_error);
    });
  }
}

export default new App();
