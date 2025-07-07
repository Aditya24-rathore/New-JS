// For of loop is used to fetch the value of array without indexing
let a=[1,2,3,4,5]
for(let i of a){
    console.log(i)
}

let arr=[11,12,13,14,15,16,17,18,19,20]
let sum=0
for(let j of arr){
      sum=sum+j
}
console.log(sum)

// With the help of for in loop we can fetch the index number of array 
let a1=[1,2,3,4,5]
for(let i in a1){
    console.log(i)
}

// Array Method
// Push-Add multiple elements in last
let person=[1,2,3,4,5]
person.push(6,7,8)
console.log(person)

// Pop-Remove elements in last
let person1=[1,2,3,4,5]
person1.pop()
console.log(person1)

// Unshift-Add elements in first
let person3=[1,2,3,4,5]
person3.unshift(0)
console.log(person3)

// Shift-Remove element in first
let person4=[1,2,3,4,5]
person4.shift()
console.log(person4)

// Slice
let person5=[1,2,3,4,5]
p=person5.slice(0,3)
console.log(p)

let arrr=[1,2,3,4,5,6,7,8,9,10]
let arrr1=arrr.slice(3,9)
for(k of arrr1){
      if(k%2==0){
            console.log(k)
      }
}

// Splice-Remove and add array(indexing,number of element of delete,adding element)
let city=("indore","Bhopal","sehore")
city.splice(1,1)
console.log(city)