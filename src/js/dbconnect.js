const mysql = require("mysql2");
// build the connectio to mysql

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root2",
  password: "root2",
  database: "school",
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Data base connected");
  } else {
    console.log(err);
  }
});

module.exports = mysqlConnection;
