var connection = require("./connection");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(tableInput, colToInsert, colToInsert2, valOfCol, valOfCol2, cb) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?);"
        connection.query(queryString, [tableInput, colToInsert, colToInsert2, valOfCol, valOfCol2], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(tableInput, colToUpdate, valOfCol, condition, condValue, cb) {
        var queryString = "UPDATE ?? SET ?? = ?, ??, ? WHERE ?? = ??";
        connection.query(queryString, [tableInput, colToUpdate, valOfCol, colToUpdate, valOfCol, condition, condValue], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};


module.exports = orm;