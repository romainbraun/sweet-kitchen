import express = require('express');
import path from 'path';
import webpack, { Configuration } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.js';

const app  = express(),
      port = process.env.PORT || 3030;

const compiler = webpack(webpackConfig as Configuration);

app.listen(port, () => { console.log(`App is listening on port ${port}`) });

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../client/dist', 'index.html'));
});

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/', stats: { colors: true },
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.resolve(__dirname, '../../../client/dist')));
