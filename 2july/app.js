// let num1=parseInt(prompt("enter first number"))
// let num2=parseInt(prompt("enter second number"))
// console.log(num1 + num2)

// WAP to take int num from user and find area of circle
// let num= parseInt(prompt("enter number"))
// let area=3.14*num*num
// console.log(area)

// WAP swap of two number using third variable
// let a=parseInt(prompt("enter first number"))
// let b=parseInt(prompt("enter second number"))
// let c
// c=a
// a=b
// b=c
// console.log(a+" "+b)

// WAP to take 1 int input the user to check num is positive r negative
// let num=parseInt(prompt("enter number"))
// if(num>=0){
//     console.log("num is positive")
// }
// else{
//     console.log("num is negative")
// }

// WAP to take two number from user and check num2 is even or odd if num2 is even print num2 and num2 is odd else multiply num1 and num2
// let num1=parseInt(prompt("enter first number"))
// let num2=parseInt(prompt("enter second number"))
// if(num2%2==0){
//     console.log(num2)
// }
// else{
//     console.log(num1*num2)
// }

// WAP to find the greatest of two number 
// let num1=parseInt(prompt("enter num1"))
// let num2=parseInt(prompt("enter num2"))
// if(num1>num2){
//     console.log(num1,"num1 is greater")
// }
// else if(num1==num2){
//     console.log("Both are equal")
// }
// else{
//      console.log(num2,"num2 is greater")
// }

// WAP to check valid age
// let age=parseInt(prompt("enter ur age"))
// if(age>0 && age<=100){
//   if(age>=18){
//     alert("you can vote")
//   }
//   else{
//     alert("you are not eligible")
//   }
// }
// else{
//     alert("please enter valid age")
// }

let char=prompt("enter character")
if(char=='a'|| char=='e' || char=='i' || char=='o' || char=='u' ||char=='A'|| char=='E' || char=='I' || char=='O' || char=='U'){
    alert("char is vowel")
}
else{
    alert("char is constant")
}