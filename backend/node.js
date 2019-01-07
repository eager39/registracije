const express = require('express')
var bodyParser = require("body-parser")
var cors = require('cors');
var nodemailer = require('nodemailer');
var mysql = require('mysql')
var schedule = require('node-schedule');
const app = express()


var j = schedule.scheduleJob('0 0 0 * * *', function(){
var transporter = nodemailer.createTransport("smtps://dobermailzlo%40gmail.com:"+encodeURIComponent('Krizanic1!') + "@smtp.gmail.com:465");

var today = new Date();
today.setHours(12);
today.setTime( today.getTime() + today.getTimezoneOffset()*60*1000 );

var mesec = new Date();
mesec.setHours(12);
mesec.setMinutes(0);
  mesec.setSeconds(0);
  mesec.setMilliseconds(0);
mesec.setTime( mesec.getTime() + mesec.getTimezoneOffset()*60*1000 );

var dvatedna = new Date();
dvatedna.setHours(12);
dvatedna.setMinutes(0);
  dvatedna.setSeconds(0);
  dvatedna.setMilliseconds(0);
  dvatedna.setTime( dvatedna.getTime() + dvatedna.getTimezoneOffset()*60*1000 );

var tridni = new Date();
tridni.setHours(12);
tridni.setMinutes(0);
  tridni.setSeconds(0);
  tridni.setMilliseconds(0);
tridni.setTime( tridni.getTime() + tridni.getTimezoneOffset()*60*1000 );

 mesec  = mesec.setMonth(mesec.getMonth() + 1 );
 dvatedna  = dvatedna.setDate(dvatedna.getDate() + 14 );
 tridni  = tridni.setDate(tridni.getDate() + 3 );
    connection.query('SELECT id,avto,regst,regdo,seen,opombe,gume FROM avto', function(err, results) {
      if (err) throw err
      var data = results;
      var length = Object.keys(data).length;
      var mesecd="",dvatednad="",tridnid="";
for(var i=0;i<length;i++){
 
  if(data[i].regdo==mesec){
    if(mesecd!=""){
      mesecd+="<li>"+data[i].regst+"</li>";
   }else{
     mesecd="<li>"+data[i].regst+"</li>";
   }
 
   
   
  }

  if(data[i].regdo==dvatedna){
    console.log("hahaha");
    if(dvatednad!=""){
      dvatednad+="<li>"+data[i].regst+"</li>";
   }else{
    dvatednad="<li>"+data[i].regst+"</li>";
   }

   
  }
  if(data[i].regdo==tridni){
    if(tridnid!=""){
      tridnid+="<li>"+data[i].regst+"</li>";
   }else{
     tridnid="<li>"+data[i].regst+"</li>";
   }
  
    
    
  }
 
}   
mesec=new Date(mesec).toDateString();
dvatedna=new Date(dvatedna).toDateString();
tridni=new Date(tridni).toDateString();


transporter.sendMail({       
  sender: 'sender@sender.com',
  to: 'zan_strong@hotmail.com',
  subject: 'Attachment!',
  html: "<ul>Čez en mesec potečejo: "+mesec+mesecd+"</ul><ul> Čez dva tedna: "+dvatedna+dvatednad+"</ul><ul> in čez tri dni potečejo: "+tridni+tridnid+"</ul>"
 // attachments: [{'filename': 'attachment.txt', 'content': data}]
}), function(err, success) {
  if (err) {
      console.log("error sending email"+err);
  }

}

  
       
      
  
   
  }, err => {
    console.log("Error: " + err);
  
});
    

  
});

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', //registracije
  password: '', //jf83d.dfDF8s
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




app.get('/avto_edit', function(req, res) {
 
var sql='SELECT id,avto,regst, FROM_UNIXTIME(regdo/1000,"%Y-%m-%d") as regdo,gume,seen,opombe FROM avto WHERE id=?';
  connection.query(sql,req.query.id, function(err, results) {
    if (err) throw err
    var data = results;
    res.send(JSON.stringify(data));
  });

});

app.get('/data', function(req, res) {
var start = new Date();
var end  = start.setMonth(start.getDay()+3);
    connection.query('SELECT id,avto,regst,regdo,gume,seen,opombe FROM avto', function(err, results) {
      if (err) throw err
      var data = results;
      res.send(JSON.stringify(data));
    });
  }, err => {
    console.log("Error: " + err);
  
});



app.post('/dodaj', function(req, res) {
 if(req.body.id){
   data=req.body;
   console.log(data.regst);
  var sql2 = "UPDATE avto set avto=?,regst=?,regdo=UNIX_TIMESTAMP(?)*1000,gume=?,opombe=?,seen=0 WHERE id=?";
  connection.query(sql2, [data.avto,data.stevilka,data.datum,data.gume,data.opombe, data.id], function (err, result) {
    if(!err){
      res.send(true);
    }else{
      res.send(false);
    }
    
  });
 }else{
  
     var sql='INSERT INTO avto (avto,regst,regdo,gume,opombe) VALUES (?,?,UNIX_TIMESTAMP(?)*1000,?,?)';
  
  console.log(req.body.avto);
     connection.query(sql,[req.body.avto,req.body.stevilka,req.body.datum,req.body.gume,req.body.opombe], function(err, results) {
       if(!err){
         res.send(true);
       }else{
         res.send(false);
       }
       
       
      });
   
     
    }
  
});

app.post('/seen', function(req, res) {
  
    
   var sql2 = "UPDATE avto set seen=? WHERE id=?";
   connection.query(sql2, [req.body.seen,req.body.id], function (err, result) {
     if(!err){
       res.send(true);
     }else{
       res.send(false);
     }
     
   });

   
 });


app.listen(3000, () => console.log('Example app listening on port 3000!'))