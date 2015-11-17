var express = require('express');
var MongoClient=require('mongodb').MongoClient;
var router = express.Router();
var Ecollection;
var totalcount;
var date=new Date();
date.setDate(date.getDate()-7);
date=date.toDateString();
var date1=new Date().toDateString();
module.exports={
  getRes:function(req,res,callback){
    var db=res.db;
    var Ecollection=db.collection('Ecollections');
    res.Ecollection=Ecollection;
   resultA(req,res);  
  },
  resultA:resultA
};
function resultA(req,res){
  var sadavg;
  var happyavg;
  var Ecollection=res.Ecollection;
 var cursor= Ecollection.aggregate(
  [
{$match : {timestamp : {$gte : date}}},
{$group : {"_id" : "$mood" , "count" : {$sum :1}}}
  ]);
}