// config.js

var config = {};

config.databaseUrl = 'mysql://followapp:awesomeapp@localhost:3306/_followapp';

if (process.env.NODE_ENV === 'production') {
  config.databaseUrl = process.env.DATABASE_URL;
}

module.exports = config;
