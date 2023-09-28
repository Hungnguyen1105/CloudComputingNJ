var express = require('express');
var router = express.Router();

//url : localhost:3000/users
router.get('/', (req,res) =>{
  res.send("<h1>This is user list</h1>")


})
//URL: localhost:3000/user/fpt
router.get('/fpt', (req,res)=>{
  res.send("<h1>This is FPt user</h1>")
})

module.exports = router;
