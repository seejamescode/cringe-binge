var cfenv = require('cfenv');
var path = require('path');
var express = require('express')
  , cors = require('cors')
  , app = express();
var router = express.Router();
var webpack = require('webpack');
var request = require('request');

var port = cfenv.getAppEnv().port;
var api_key = process.env.API_KEY || require('./.env').api_key;
var NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'production') {
  var config = require('./webpack.config.prod');
  var host = cfenv.bind;
} else {
  var config = require('./webpack.config.dev');
  var host = 'localhost';
}

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/*', (req, res) => {
  var query = req.originalUrl.replace('/api/','');
  request(`http://api.themoviedb.org/3/${query}api_key=${api_key}`, (err, response, body) => {
    if (!err && response.statusCode == 200) {
      res.send(body);
    }
  });
})

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, host, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('App is live at http://localhost:' + port);
});