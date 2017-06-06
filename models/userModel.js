const pg = require('pg');
const Seq = require('sequelize');

var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/bulletinboard';

const seq = new Seq(connectionString);

var Messages = seq.define('messages', {
  id: {type: Seq.INTEGER, autoIncrement: true, primaryKey: true},
  // title: {type: Seq.STRING, unique: true},
  body: Seq.STRING
  }
);
 
Messages.sync();

module.exports = Messages;