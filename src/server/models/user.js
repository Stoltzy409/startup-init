(function(){
  "use strict";
  var db = require('../db');

  var user = db.model('User', new db.Schema({
    userName: {type: String, required: true},
    hashPassword: String,
    salt: String,
    userInfo: {
      firstName: String,
      lastName: String,
      github: String,
      website: String
    }
    //TODO: determine if we will need any info pertaining to Company they are with
  }));
  module.exports = user;
})();
