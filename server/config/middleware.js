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


  app.use('/users/contacts/*/conversations', conversationsRouter);
  app.use('/users/contacts', contactsRouter);
  app.use('/users', userRouter);

  require('../users/usersRoutes.js')(userRouter);
  require('../contacts/contactsRoutes.js')(linkRouter);
  require('../conversations/conversationsRoutes.js', conversationsRouter);

};

