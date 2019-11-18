var orm = require("../config/orm");

// call the ORM functions using burger specific input for the ORM.


var burgerFunctions = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cb) {
        orm.insertOne("burgers", "burger_name", "devoured", function(res) {
            cb(res);
        })
    },

    updateOne: function(cb) {
        orm.updateOne("burgers", "burger_name", "devoured", "devoured", "true", function(res) {
            cb(res);
        });
    }
    

};

module.exports = burgerFunctions;