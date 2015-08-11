var morgan = require('morgan');
var bodyParser = require('body-parser');
// var utils = require('./utils.js');


module.exports = function(app, express) {
  var userRouter = express.Router();
  var contactsRouter = express.Router();
  var conversationsRouter = express.Router();
  var mediumsRouter = express.Router();


  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  // app.use(utils.paramHandler(app, req, res, 'userId', 'userId'));
  // app.use(utils.paramHandler(app, req, res, 'contactId', 'contactId'));

  // Pass params along to chained routers
  // params are not able to pass through middleware,
  // so they need to be bound to req here
  app.param('userId', function(req, res, next, userId) {
    console.log('in app param userId');
    req.userId = userId;
    next();
  });

  app.param('contactId', function(req, res, next, contactId) {
    console.log('in app param userId');
    req.contactId = contactId;
    next();
  });

  app.use('/users/:userId/contacts/:contactId/conversations', conversationsRouter);
  app.use('/users/:userId/contacts', contactsRouter);
  app.use('/users', userRouter);
  app.use('/mediums', mediumsRouter)

  require('../users/usersRoutes.js')(userRouter);
  require('../contacts/contactsRoutes.js')(contactsRouter);
  require('../conversations/conversationsRoutes.js')(conversationsRouter);
  require('../mediums/mediumsRoutes.js')(mediumsRouter);
  
};






