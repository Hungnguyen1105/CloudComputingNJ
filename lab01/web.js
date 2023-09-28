// 1. khai báo module(library) http
const http = require('http')
// 2. khai báo host(server)
const host = 'localhost'
// 3.khai báo pỏt (cổng) của server
const port = 3003 // 3000; default post of NodeJS
//khởi tạp server
const server = http.createServer((request,respond)=>{
   respond.write("<h1>Hello World</h1>")
   respond.write("<i>Demo NodeJS webserver</i>")
   respond.write("<h2 style = 'color: red'> Today is Friday</h2>")
   respond.write("<h3> Now, I am learning NodeJS")
   respond.end("<img src = 'https://www.londonxlondon.com/wp-content/uploads/2016/10/Greenwich-14.jpg' width = '50%' height='50%'>")

})
//5 chạy server bằng cách listen port
server.listen(port, () =>{

console.log("Server is running at http://" + host +":" + port)

})

