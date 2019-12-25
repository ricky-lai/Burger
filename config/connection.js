// Importing the needed node packages
var mysql = require("mysql");

// Creating the connection variable
var connection;
var PORT = process.env.PORT || 3000;

// Setting up the connection to the database for use on heroku or locally
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: PORT,
        host: "localhost",
        user: "root",
        password: "Laihoss9328!",
        database: "burgers_db"
    });
};

// Making connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Exporting connection for the ORM to use
module.exports = connection;
