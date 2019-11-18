var connection = require("./connection");

var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput, colToInsert, valOfCol) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES ('?', '?');"
        connection.query(queryString, [tableInput, colToInsert, colToInsert, valOfCol, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableInput, colToUpdate, valOfCol, condition, condValue) {
        var queryString = "UPDATE ?? SET ?? = ?, ??, ? WHERE ?? = ??";
        connection.query(queryString, [tableInput, colToUpdate, valOfCol, colToUpdate, valOfCol, condition, condValue], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};


module.exports = orm;