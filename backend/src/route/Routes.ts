/* router initiater */
import { Application } from 'express';

import webRouter from './web';
import apiRouter from './api';

/**
 * routes for web or api
 */
class Routes{

    private mountWeb(_express: Application): Application {
        /**
         * handle web server url
         */
        return _express.use("/", webRouter)
    }

    private mountApi(_express: Application): Application {
        /**
         * handle web server url
         */
        return _express.use("/api", apiRouter)
    }

    public init(_express: Application): Application{
        _express = this.mountWeb(_express);
        _express = this.mountApi(_express);

        return _express;
    }
}


export default new Routes;