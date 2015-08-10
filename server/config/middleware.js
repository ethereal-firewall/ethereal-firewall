var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, express) {
  var userRouter = express.Router();
  var contactsRouter = express.Router();
  var conversationsRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  // app.use(express.static(__dirname + '/../../client'));

  app.param('userId', function(req, res, next, userId) {
    console.log('in app param userId');
    req.ourParams = {};
    req.ourParams.userId = userId;
    next();
  });

  app.use('/users/:userId/contacts/:contactId/conversations', conversationsRouter);
  app.use('/users/:userId/contacts', contactsRouter);
  app.use('/users', userRouter);

  require('../users/usersRoutes.js')(userRouter);
  require('../contacts/contactsRoutes.js')(contactsRouter);
  require('../conversations/conversationsRoutes.js', conversationsRouter);

};

