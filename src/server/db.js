(function () {
  "use strict";
  var mongoose = require('mongoose');


  mongoose.connect('mongodb://localhost/weWantStartups', function () {
    "use strict";
    console.log("DB connected")
  });
})();