'use strict';

var config = require('config'),
  dbHost = config.get('databases.postgres.connection.host'),
  dbUser = config.get('databases.postgres.connection.user'),
  dbPassword = config.get('databases.postgres.connection.password'),
  dbName = config.get('databases.postgres.connection.database');

module.exports = ({
  development: {
    client: 'pg',
    connection: {
      host: dbHost,
      user: dbUser,
      password: dbPassword,
      database: dbName
    },
    debug: true,
    pool: {
      min: 0,
      max: 7
    }
  }
});
