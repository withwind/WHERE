var mysql = require('mysql');
var orm = require('orm');

var opts = {
  database : "where",
  protocol : "mysql",
  host : "127.0.0.1",
  user : "root",
  password : "forget",
  query : {
    pool : true,
    debug : true
  }
};

exports.db = orm.connect(opts, function(err, db) {
  if (err) return console.error('Connection error: ' + err);
});