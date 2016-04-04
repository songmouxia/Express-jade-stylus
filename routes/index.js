 var express = require('express');
 var router = express.Router();
 var css=require("stylus");
     str=require("fs").readFileSync("static/css/index.styl","utf-8")
   
 /* GET home page. */
 router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express', time:"2015-11-18" });
 });
 
  router.get('/css', function(req, res, next) {
   css.render(str,{filename:"index.css"},function(err,css){
   	if(err) throw err;
   	  res.end(css);
   })
  
 }); 
 	

 module.exports = router;