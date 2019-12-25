// Importing the orm.js file
var orm = require("../config/orm.js");

// Calling the ORM functions using burger-specific input for the ORM 
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
}

// Exporting the database functions for the controller
module.exports = burger;