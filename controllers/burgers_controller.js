var express = require("express");
var burgerFunctions = require("../models/burger");
var router = express.Router();
var connection = require("../config/connection");

router.get("/", function(req, res) {
  burgerFunctions.selectAll(function(data) {
    res.render("index", { burgers: data });
  });
});


router.post("/api/burgers", function(req, res) {
  burgerFunctions.insertOne(["burger_name", "devoured"],[req.body.burger_name, false],
  function(result) {
    res.redirect("/");
  });
});


router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burgerFunctions.updateOne({ devoured: true }, condition, function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500);
    }
    else if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
    res.redirect("/");
    }
  });
});

module.exports = router;