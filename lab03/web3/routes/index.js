//1.khai bao express
const express = require('express')
// 2. khai bao router (controller)
const router = express.Router()


//render ra trang homepage (view/index.hbs)
router.get('/', (req,res) =>{
    res.render('index')
})

//render ra trang login(view/index.hbs)
//url:localhost: 3000/dangnhap
router.get('/login', (req,res)=>{
    res.render('login')
})
router.get('/contact',(req,res) => {
    res.render('contact')
})
router.get('/demo',(req,res) =>{
    //gui du lieu font end sang back end
    var year = 2023
    var country = "Bac Giang"
    var university = "Greenwich Vietnam"
    var music = ['Bolero', 'Rap']
    var country = ["Bac Giang ", "Ha Noi"]

    res.render('demo', 
    {   year : year,
        country: country,
        university :university,
        music : music

    })
})

//3.export module router
module.exports = router
