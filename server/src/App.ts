import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import path from 'path';
import webpack, { Configuration } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import Routes from './Routes.js';
import webpackConfig from './webpack.config.js';

export default class App {
  public app: express.Application;
  private routeProvider: Routes = new Routes();
  private mongoURL: string = 'mongodb://localhost/sweet-kitchen';

  constructor() {
    this.app = express();
    this.config();
    this.routeProvider.routes(this.app);
    this.mongoSetup();
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoURL);
  }

  private config(): void {
    const compiler = webpack(webpackConfig as Configuration);

    this.app.use(helmet());

    this.app.use(webpackDevMiddleware(compiler, {
      publicPath: '/', stats: { colors: true },
    }));
    this.app.use(webpackHotMiddleware(compiler));

    this.app.use(express.static(path.resolve(__dirname, '../../../client/dist')));
  }
}
