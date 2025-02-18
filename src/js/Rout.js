const express = require("express");
const Router = express.Router();
const mysqlConnection = require("./dbconnect");
const mysql = require("mysql");
var cors = require('cors');

Router.use(cors());


Router.get("/", (req, res)=>{  
    mysqlConnection.query('SELECT * FROM SDETAIL', (err, rows)=>{

         if(!err){

         res.send(rows);
         }

         else{

           res.send(err);  
         }
       

    });

});
Router.get("/:id",(req, res)=>{ 
  mysqlConnection.query(`SELECT * FROM SDETAIL WHERE sid = '${req.params.id}'`, (err, rows)=>{
  // if(err) throw err;
  if(!err){

    res.send(rows);
    }

    else{

      res.send(err);  
    }
  });
 });

 Router.get("/:id/:id1",(req, res)=>{ 
  mysqlConnection.query(`SELECT * FROM SDETAIL WHERE fname = '${req.params.id}' and lname='${req.params.id1}'`, (err, rows)=>{
  // if(err) throw err;
  if(!err){

    res.send(rows);
    }

    else{

      res.send(err);  
    }
  });
 });

 Router.post("/",(req, res)=>{ 
   let data = req.body
   console.log(data)
  mysqlConnection.query('insert into sdetail set ?',data, (err, rows)=>{
  // if(err) throw err;
  if(!err){

    res.send(rows);
    }

    else{

      res.send(err);  
    }
  });
 });

 Router.put("/",(req, res)=>{ 
  let data = req.body
 mysqlConnection.query(`update sdetail set fname ='${data.fname}' where sid ='${data.sid}'`, (err, rows)=>{
 // if(err) throw err;
 if(!err){

   res.send(rows);
   }

   else{

     res.send(err);  
   }
 });
});

Router.delete("/:id",(req, res)=>{ 
 //let data = req.body
 mysqlConnection.query(`delete from sdetail where sid ='${req.params.id}'`, (err, rows)=>{
 // if(err) throw err;
 if(!err){

   res.send(rows);
   }

   else{

     res.send(err);  
   }
 });
});

Router.get("/city/", (req, res)=>{  
  mysqlConnection.query('SELECT * FROM city', (err, rows)=>{

       if(!err){

       res.send(rows);
       }

       else{

         res.send(err);  
       }
     

  });

});
    module.exports = Router;
