var express = require('express');
var collec=require('./doc.js');
var MongoClient=require('mongodb').MongoClient;
var router = express.Router();
var Ecollection;
var date;

var uri='mongodb://AnamikaEx:AnamikaEX@ds053164.mongolab.com:53164/example';

/* GET users listing. */
router.get('/', function(req, res, next) {
date=new Date();
var db=MongoClient.connect(uri,function(err,db){
if(err)
{
  res.send("cannot connect to database");
}
else
{
	res.db=db;
collec.findData(req,res,function(){
	db.close();
});
}
});
 
});

module.exports = router;
