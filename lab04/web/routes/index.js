var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fpt', (req,res) => {
  var fpt = "FPT";
  var year = 2023;
  var football = ["manchester city", "manchester united", "chelsea"];
  var images = ['mancity.png', 'mu.png', 'chelsea.png'];
  //multi demiensional array(mang nhieu chieu)
  var capital = [
    ['vietnam', "ha noi"],
    ['thai lan', 'bangkok'],
    ['singapore', 'singapore' ],

  ]

  res.render('fpthanoi', 
  { 
    fpt : "FPT Hanoi",
    year : year,
    clubs : football,
    logos : images,
    capital: capital
  }
  );
})

module.exports = router;