// var db = require("../models");

module.exports = function(app) {
 
    // Load landing page
    app.get("/", function(req, res) {
      res.render("index");
    });
  };