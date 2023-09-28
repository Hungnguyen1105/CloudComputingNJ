const http = require('http')
const host = 'localhost'
const port = 3002
const server = http.createServer((request , respond)=>{
    respond.write("<h1> Nguyen Duy Hung</h1>")
    respond.write("<h2> 15/10/2003</h2>")
    respond.write("<h3> Bac Giang</h3>")
    respond.write("<h4> GBH210504</h4>")
    respond.write("<h5> 0868151003</h5>")
    respond.write("<a href='facebook.com/nyguuyenhung/''> </a>")
    respond.write("<img src ='https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/377941527_840578037539487_8955512397889046468_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=W4VZx0yABBIAX81hGoM&_nc_ht=scontent.fhan3-3.fna&oh=00_AfDo34kw_3gbIOhmO-au7d2pMSzxw4mnTascD3eMIdkKSQ&oe=6508A0BF'></img>")
    respond.write("<ul>game</ul>")
    respond.write("<ul>sport</ul>")
    respond.write("<ul>sleep</ul>")
    respond.end()
})
server.listen(port, () =>{

    console.log("Server is running at http://" + host +":" + port)
    
    })
