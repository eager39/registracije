const express = require('express')
var bodyParser = require("body-parser")
var cors = require('cors');
var nodemailer = require('nodemailer');
var mysql = require('mysql')
var schedule = require('node-schedule');
const app = express()


var j = schedule.scheduleJob('44 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
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


var transporter = nodemailer.createTransport("smtps://dobermailzlo%40gmail.com:"+encodeURIComponent('Krizanic1!') + "@smtp.gmail.com:465");

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'zan_strong@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
/*
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
*/
app.get('/avto_edit', function(req, res) {
 
var sql='SELECT id,avto,regst, FROM_UNIXTIME(regdo/1000,"%Y-%m-%d") as regdo,seen,opombe FROM avto WHERE id=?';
  connection.query(sql,req.query.id, function(err, results) {
    if (err) throw err
    var data = results;
    console.log(data);
    res.send(JSON.stringify(data));
  });

});

app.get('/mail', function(req, res) {
  var start = new Date();
  var today = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate(),start.getTimezoneOffset()+60 ));
  var end  = today.setDate(today.getDay()+3);
 
 
  console.log(end,"asd");
      connection.query('SELECT id,avto,regst,regdo,seen,opombe FROM avto', function(err, results) {
        if (err) throw err
        var data = results;
        console.log(data);
        var length = Object.keys(results).length;
        var posta={};
  for(var i=0;i<length;i++){
     
    if(results[i].regdo <=end){
     if(i==0){
      posta=results[i].regst+", ";
     }else{
       posta+=results[i].regst+", ";
     }
     
    }
   
   
  } 
  console.log(posta);
  transporter.sendMail({       
    sender: 'sender@sender.com',
    to: 'zan_strong@hotmail.com',
    subject: 'Attachment!',
    text: "Potečejo naslednje registracijske številke: "+ posta,
   // attachments: [{'filename': 'attachment.txt', 'content': data}]
  }), function(err, success) {
    if (err) {
        // Handle error
    }
  
  }
  
        
         
        
       // res.send(JSON.stringify(posta));
      });
    }, err => {
      console.log("No such user. Error: " + err);
    
  });

app.get('/data', function(req, res) {
var start = new Date();
var end  = start.setMonth(start.getDay()+3);
    connection.query('SELECT id,avto,regst,regdo,seen,opombe FROM avto', function(err, results) {
      if (err) throw err
      var data = results;
      console.log(data);
      var length = Object.keys(results).length;
      var posta={};
for(var i=0;i<length;i++){
  if(results[i].regdo >end){
   posta[i]= results[i];
   console.log("wtf");
  }
 
}
console.log(posta);/*
transporter.sendMail({       
  sender: 'sender@sender.com',
  to: 'zan_strong@hotmail.com',
  subject: 'Attachment!',
  text: JSON.stringify(results),
 // attachments: [{'filename': 'attachment.txt', 'content': data}]
}), function(err, success) {
  if (err) {
      // Handle error
  }

}

      */  
       
      
      res.send(JSON.stringify(data));
    });
  }, err => {
    console.log("No such user. Error: " + err);
  
});



app.post('/dodaj', function(req, res) {
 if(req.body.id){
   data=req.body;
   console.log(data.regst);
  var sql2 = "UPDATE avto set avto=?,regst=?,regdo=UNIX_TIMESTAMP(?)*1000,opombe=?,seen=0 WHERE id=?";
  connection.query(sql2, [data.avto,data.stevilka,data.datum,data.opombe, data.id], function (err, result) {
    if(!err){
      res.send(true);
    }else{
      res.send(false);
    }
    
  });
 }else{
  
     var sql='INSERT INTO avto (avto,regst,regdo,opombe) VALUES (?,?,UNIX_TIMESTAMP(?)*1000,?)';
  
  console.log(req.body.avto);
     connection.query(sql,[req.body.avto,req.body.stevilka,req.body.datum,req.body.opombe], function(err, results) {
       if(!err){
         res.send(true);
       }else{
         res.send(false);
       }
       
       
      });
   
     
    }
  
});

app.post('/seen', function(req, res) {
  
    
   var sql2 = "UPDATE avto set seen=1 WHERE id=?";
   connection.query(sql2, [req.body.id], function (err, result) {
     if(!err){
       res.send(true);
     }else{
       res.send(false);
     }
     
   });

   
 });


app.listen(3000, () => console.log('Example app listening on port 3000!'))