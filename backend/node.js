const express = require('express')
var bodyParser = require("body-parser");
var cors = require('cors');
var mysql = require('mysql')
const app = express()




var connection = mysql.createConnection({
  host: 'localhost',
  user: 'zankr',
  password: 'krizanic',
  database: 'registracije'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());





app.get('/data', function(req, res) {
  
    connection.query('SELECT avto,regst,regdo,seen FROM avto', function(err, results) {
      if (err) throw err
      var data = results;
      console.log(data);
      res.send(JSON.stringify(data));
    });
  }, err => {
    console.log("No such user. Error: " + err);
  
});



app.post('/groupdraw', function(req, res) {
  
   var sql='UPDATE igralci_turnir set groupname=? WHERE turnir=? and igralec=?';
  
   for(var i=0;i<req.body.length;i++){
     connection.query(sql,[req.body[i][1],req.query.id,req.body[i][0]], function(err, results) {
       if (err) throw err
       
       
      });
   }
      res.send();
  
  
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))