// Object-Store multiple type of data
let person={
    name:"aditya",
    age:20,
    city:"sehore",
    contact:123456
}
person.email="adi123@email.com"
person.city="Bhopal"
delete person.contact
console.log(person)
console.log(person.age)
console.log(person.city)


// let emp={
//     emp_name:prompt("enter emp_name"),
//     emp_id:prompt("enter emp_id"),
//     emp_contact:prompt("enter emp_contact"),
//     emp_address:prompt("enter emp_address"),
//     emp_designation:prompt("enter emp_designation"),
// }
// console.log(emp)

let emp1={
    emp_name:["adi","aditya"],
    emp_id:9,
    emp_address:{
        emp_add1:"Bhopal",
        emp_add2:"Sehore"
    }
}

console.log(emp1.emp_name[1])
console.log(emp1.emp_address.emp_add2)

// To fetch the keys of object for in loop will be used
let person1={
    name:"aditya",
    age:20,
    city:"sehore",
    contact:123456
}
for(k in person1){
    console.log(k)
    console.log(person1[k])
}


// Object Methods
let person2={
    name:"aditya",
    age:20,
    city:"sehore",
    contact:123456
}
let keys=Object.keys(person2)
console.log(keys)
console.log(keys[2])
let values=Object.values(person2)
console.log(values)