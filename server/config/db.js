var Sequelize = require('sequelize');
var sequelize = new Sequelize('followApp', 'root', '');

var User = sequelize.import('../users/usersModel');
var Contact = sequelize.import('../contacts/contactsModel');
var Conversation = sequelize.import('../conversations/conversationsModel');
var Medium = sequelize.import('../conversations/conversationsModel');

User.hasMany(Contact);
Contact.belongsTo(User);

Contact.hasMany(Conversation);
Conversation.belongsTo(Contact);

Conversation.hasMany(Medium);
Medium.belongsTo(Conversation);

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

module.exports.User = User;
module.exports.Contact = Contact;
module.exports.Conversation = Conversation;
module.exports.Medium = Medium;
