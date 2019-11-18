var express = require("express");
var burgerFunctions = require("../models/burger");
var router = express.Router();
var connection = require("../config/connection");

router.get("/", function(req, res) {
  // burgerFunctions.selectAll(function(data) {
  //   res.render("index", { burgers: data });

  connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [req.body.burger_name, req.body.devoured], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500);
    }

    // Send back the ID of the new quote
    res.render("index", { burgers: result });
  });
});


router.post("/api/burgers", function(req, res) {
  burgerFunctions.insertOne(["burger_name", "devoured"],[req.body.burger_name, false],
  function() {
    res.redirect("/");
  });
  // connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [req.body.burger_name, req.body.devoured], function(
  //   err,
  //   result
  // ) {
  //   if (err) {
  //     // If an error occurred, send a generic server failure
  //     return res.status(500).end();
  //   }

  //   // Send back the ID of the new quote
  //   res.json({ id: result.insertId });
});


router.put("/api/burgers/:id", function(req, res) {
  burgerFunctions.updateOne({ devoured: req.body.devoured }, condition, function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500);
    }
    else if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404);
    }
    res.status(200);
  });
});

//   connection.query(
//     "UPDATE burgers SET burger_name = ?, devoured = ? WHERE id = ?",
//     [req.body.burger_name, req.body.devoured, req.params.id],

//     }
//   );
// });
// }
module.exports = router;