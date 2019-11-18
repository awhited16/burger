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
  burgerFunctions.insertOne(["burger_name", "devoured"],[req.body.burger_name, req.body.devoured],
  function(result) {
    res.json({ id: result.insertId });
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

// router.delete("/burgers/delete/:id", function(req, res) {
//   connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server failure
//       return res.status(500).end();
//     }
//     else if (result.affectedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();

//   });
// });

// Update a quote by an id and then redirect to the root route.
router.put("/api/burgers/:id", function(req, res) {
  burgerFunctions.updateOne({ devoured: req.body.devoured }, condition, function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  })
});

//   connection.query(
//     "UPDATE burgers SET burger_name = ?, devoured = ? WHERE id = ?",
//     [req.body.burger_name, req.body.devoured, req.params.id],

//     }
//   );
// });
// }
module.exports = router;