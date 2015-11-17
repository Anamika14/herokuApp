var express = require('express');

var mongo = require("mongodb");
var MongoClient=mongo.MongoClient;
var Ecollection;
var router = express.Router();

var uri='mongodb://AnamikaEx:AnamikaEX@ds053164.mongolab.com:53164/example'
/* GET home page. */
router.get('/', function(req, res, next) {
	var mood=req.query.mood;
	if(mood=== 'happy' || mood === 'sad' || mood === 'angry')
	{
	var db=MongoClient.connect(uri,function(err,db){
		if(err)
			console.log(error);
		else{
			Ecollection=db.collection('Ecollections');
			var date=new Date();			
		Ecollection.insert({'timestamp' : date.toDateString(),'mood' : mood});
	res.write("welcome to" + mood + date);
		}
	});
	}
  res.render('index', { title: mood });
});
 
module.exports = router;
