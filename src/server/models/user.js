(function () {
  "use strict";
  var db = require('../db');

  module.exports = db.model('User', new db.Schema({
    userName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    userInfo: {
      firstName: String,
      lastName: String,
      github: String,
      website: String
    },
    accountType: [{
        jobSeeker: {
          type: Boolean,
          required: true
        },
        company: {
          type: Boolean,
          required: true
        }
    }]
      //TODO: determine if we will need any info pertaining to Company they are with
  }));
})();