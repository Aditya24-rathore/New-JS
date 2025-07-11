// With argument and no return value
function fun(a){
    console.log(a*a)
}
fun(8)

// Without argument and return value
function func(){
    let a=10
    return a+a
}
let func1=func()
console.log(func1)

// With argument and return value
function fun1(num){
    return num*num
}
let b=12
console.log(fun1(b))

// WAP to print sum of two number using function type3
function sum(num1,num2){
    return num1+num2
}
console.log(sum(10,20))

// WAP to take one integer number from user and check number is even or odd
let number=parseInt(prompt("enter number"))
function check(numm){
    if(numm%2==0){
        console.log("number is even")
    }
    else{
        console.log("number is odd")
    }
}
check(number)

// WAP to print a table of any number using function type2
function table(nummm) {
    for(let i=1;i<=10;i++){
      console.log(nummm*i)
    }
}
let numm1=parseInt(prompt("enter number"))
table(numm1)

// WAP to print multiplication between 1 to 10 numbers
function multiplication(){
    mul=1
    for(let i=1;i<=10;i++){
        mul=mul*i

    }
    return mul
}
console.log(multiplication())