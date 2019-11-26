var express = require("express");
var burgerFunctions = require("../models/burger");
var router = express.Router();
// var connection = require("../config/connection");

router.get("/", function(req, res) {
  burgerFunctions.selectAll(function(data) {
    res.render("index", { burgers: data });
  });
});


router.post("/api/burgers", function(req, res) {
  burgerFunctions.insertOne(["burger_name", "devoured"],[req.body.burger_name, false],
  function(result) {
    res.json({ id: result.insertId });
    res.redirect("/");
  });
});


router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burgerFunctions.updateOne({ devoured: true }, condition, function(result) {
    res.redirect("/");
  });
});

module.exports = router;