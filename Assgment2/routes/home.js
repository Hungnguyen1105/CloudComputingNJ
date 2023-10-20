var express = require('express');
const ProductModel = require('../models/ProductModel')
var router = express.Router();

/* GET home page. */
router.get('/', async(req,res) =>{
  var products =  await ProductModel.find();
  res.render('home/index', {products:products})
})
module.exports = router;
