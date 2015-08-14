var morgan = require('morgan');
var bodyParser = require('body-parser');
var utils = require('./utils.js');


module.exports = function(app, express) {
  var userRouter = express.Router();
  var contactsRouter = express.Router();
  var conversationsRouter = express.Router();
  var mediumsRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  // Calls to utils.attachParams pass URL parameters along to chained routers.
  // Parameters are not able to pass through middleware, so they need to be bound to req._data in the helper function.

  app.use('/users/:userId/contacts/:contactId/conversations', utils.attachParams, conversationsRouter);
  app.use('/users/:userId/contacts', utils.attachParams, contactsRouter);
  app.use('/users', userRouter);
  app.use('/mediums', mediumsRouter)

  require('../users/usersRoutes.js')(userRouter);
  require('../contacts/contactsRoutes.js')(contactsRouter);
  require('../conversations/conversationsRoutes.js')(conversationsRouter);
  require('../mediums/mediumsRoutes.js')(mediumsRouter);
  
};
