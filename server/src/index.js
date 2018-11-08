const path          = require('path'),
      express       = require('express'),
      webpack       = require('webpack'),
      webpackConfig = require('../../client/webpack.config.js'),
      app           = express(),
      port          = process.env.PORT || 3030;

let compiler = webpack(webpackConfig);

app.listen(port, () => { console.log(`App is listening on port ${port}`) });

app.get('/', (req, res) => {
  console.log('yes');
  res.sendFile(path.resolve(__dirname, '../../client/dist', 'index.html'));
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false, publicPath: webpackConfig.output.publicPath, stats:    { colors: true }
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.resolve(__dirname, '../../client/dist')));