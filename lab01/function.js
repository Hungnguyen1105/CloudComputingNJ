//1. Hàm cso return và có tham số
function sayHi(name){
    return "Hello" + name+ " !"
}
console.log(sayHi("Messi"))

//2. hàm không có return nhưng có tham số
function welcome(name){
    console.log ("Welcome " +name + "to Greenwich VietNam ")
}
function sum(x,y){
    console.log("Total: " +(x+y))
}
welcome("Messi Lionel ")
sum(20, 30)

//3. hàm có return nhưng không có tham số
function calculate(){
    a = 5 
    b= 7
    return a+b;
}
console.log(calculate())

//4 hàm k có return và k có tham số

function sayHello(){
    console.log(1644)
    console.log("cloud computing")
    a=10
    b=20
    console.log("a + b = " + (a+b))
}

sayHello()