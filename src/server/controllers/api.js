(function (){
  'use strict';
  var router = require('express').Router();
  var User = require('../models/user');
  
  router.get('/users', function(req, res, next){
    User.find().exec(function(err, users){
      if(err){return next(err)}
      
      res.json(users);
    });
  });
  
  router.post('/users', function(req, res, next){
    var user = new User({
      userName: req.body.userName
    })
  });
  module.exports = router;
})();