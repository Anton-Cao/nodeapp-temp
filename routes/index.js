var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('feed');
});

router.get('/hello',function(req,res,next){
  res.render('index',{title:'The World'})
});

router.get('/login',function(req,res,next){
  res.render('login', {username:'eric achooo'})
});

router.post('/newpost', function(req,res,next){
  console.log(req.body.post);
  res.send('received');
});

module.exports = router;
