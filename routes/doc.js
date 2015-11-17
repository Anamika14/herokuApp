var express = require('express');
var MongoClient=require('mongodb').MongoClient;
var router = express.Router();
var calc=require('./prgm4.js')
var date=new Date().toDateString();
var doc = {
 findData :function(req,res,callback) {
  var db=res.db;
   var coll =db.collection('Ecollections');
   var cursor=coll.find({timestamp: date});
   var cursorS=coll.find({timestamp: date, mood:'sad'});
   var cursorH=coll.find({timestamp: date, mood:'happy'});
   var cursorA=coll.find({timestamp: date, mood:'angry'});
   cursor.count(function(err,count){
     if (count != null)
     	{console.log(count);
        res.count=count;
        res.db=db; 
     }
     else
     	callback();
   });
   cursorS.count(function(err,countS)
   {
    if(countS!=null)
      {console.log(countS);
       res.countS=countS;
      }
      else
        callback();
   });
   cursorH.count(function(err,countH){
    if(countH!=null)
    {
      console.log(countH);
      res.countH=countH;
    }
    else
      callback();
   });
   cursorA.count(function(err,countA){
    if(countA!=null)
    {
      console.log(countA);
      res.countA=countA;
      insertData(req,res) ;   
    }
    else
      callback();

   });
   },
insertData: insertData
};
function insertData(req,res)
{
  var db=res.db;
  var count=res.count;
  var countA=res.countA;
  var countH=res.countH;
  var countS=res.countS;
  var date_basis=db.collection('date_basis');
  date_basis.insert({'date': date, 'total': count,'sad' : countS,'angry' : countA, 'happy' :countH});
  res.db=db;
  calc.getRes(req,res);
}
module.exports=doc;