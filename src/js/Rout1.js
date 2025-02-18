const express = require("express");
const Router1 = express.Router();
const mysqlConnection = require("./dbconnect");
const mysql = require("mysql");
//const  Router  = require("express");

Router1.get("/allstudent", (req, res) => {
  mysqlConnection.query("select * from sdetail", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      res.set(err);
    }
  });
});

Router1.post("/addstudent", (req, res) => {
  let data = req.body;

  mysqlConnection.query("insert into sdetail set ?", data, (err, rows) => {
    // mysqlConnection.query("select * from sdetail", (err, rows) => {
    if (!err) {
      res.send("added");
    } else {
      res.set(err);
    }
  });
});
Router1.get("/", (req, res) => {
  mysqlConnection.query("SELECT * FROM city", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      res.send(err);
    }
  });
});

Router1.get("/student/:id", (req, res) => {
  let id1 = req.params.id;
  console.log(id1);
  mysqlConnection.query(
    "SELECT * FROM SDETAIL WHERE sid ='" + id1 + "'",
    (err, rows) => {
      // if(err) throw err;
      if (!err) {
        res.send(rows);
      } else {
        res.send(err);
      }
    }
  );
});

module.exports = Router1;
