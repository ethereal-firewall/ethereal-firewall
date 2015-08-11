var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var db = require('./config/db');

var app = express();

app.set('models', db);

app.use(session({
  store: new RedisStore(),
  genid: function(req) {
    return genuuid()
  },
  secret: 'darrylhatescssyeshedoesohyeshedoes'
}));

require('./config/middleware.js')(app, express);

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.listen(port);
console.log('listening on port', port);

exports = module.exports = app;
