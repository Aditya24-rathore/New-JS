// map iterate the each element of array and return the new array and its take inner function for callback.Callback function is which is passed in parameter of any function
let a=[1,2,3,4,5]
let b=a.map((e)=>{
    return e*2
})
console.log(b)

// filter iterate every element of array and return the new array but return the element after flter
let arr=[1,2,3,4,5,6,7,8]
let arr1=arr.filter((e1)=>{
    return e1%2==0
})
console.log(arr1);

let arr2=[1,2,3,4,5,6,7,8,10,34]
let arr3=arr2.filter((e3)=>{
    return e3<10
})
console.log(arr3);

// for each - it does not return any value direct console does not return array  
let num=[2,3,4,5,6]
let num1=num.forEach((e)=>{
    console.log(e*2)
})

let obj=[{
    name:"aditya",
    age:20,
    city:"Sehore"
},{
    name:"ayush",
    age:21,
    city:"Bhopal"
},{
    name:"harsh",
    age:20,
    city:"Sehore"
},{
    name:"adi",
    age:24,
    city:"Indore"
},{
    name:"aman",
    age:20,
    city:"Bhopal"
}]

let store=document.querySelector("#store")

let obj1=obj.map((e)=>{
    store.innerHTML+=`
    <div style="border: 2px solid black;padding:50px;background-color: black;color:white;">
    <h1>${e.name}</h1>
    <p>${e.age}<p/>
    <p>${e.city}</p>
    </div>
    `
})

console.log(obj[3]) //print all element
console.log(obj[3].name) //print single element
