// Function - Block of code it is used for code reusablility
function demo(){
    alert("Hello from js")
}
demo()

// function add(){
//     let a=parseInt(prompt("enter number"))
//     let b=parseInt(prompt("enter number"))
//     console.log(a+b)
// }
// add()

// WAP to print area of circle 
function AOC(){
    let r=parseInt(prompt("enter radius"))
    let area=3.14*r*r
    console.log(area)
}
AOC()
// WAP to find greatest number between two number
function greaterNum(){
    let num1=parseInt(prompt("enter num1"))
    let num2=parseInt(prompt("enter num2"))
    if(num1>num2){
        console.log("num1 is greater")
    }
    else{
        console.log("num2 is greater")
    }
}
greaterNum()
// WAP to print your name ten times
// WAP to print sum of all even numbers between 1 to 10 elements should be in array
function evenNum(){
    let num=[1,2,3,4,5,6,7,8,9,10]
    sum=0
    for(let k of num){
        if(k%2==0){
           sum=sum+k
        }
    }
    console.log(sum)
}
evenNum()

// WAP to print keys of an object should have five object
function obj(){
    let person={
        name:"aditya",
        city:"bpl",
        age:"20",
    }
    for(let k in person){
        console.log(k)
    }
}
obj()