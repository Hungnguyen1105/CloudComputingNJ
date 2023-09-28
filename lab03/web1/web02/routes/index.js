var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.write("<h1> Hello World </h1>")
  res.end()
})

router.get('/greenwich', (req,res) =>{
  res.write("<h1>University of Greenwich VietNam (campus Ha Noi)</h1>")
  res.write("<h2> 2 Pham Van Bach - Cau Giay - Ha Noi")
  res.end()
})
module.exports = router;
