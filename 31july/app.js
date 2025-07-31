console.log(Math.ceil(Math.random()*9));
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(1000+Math.random()*9000));
console.log(Math.floor(1+Math.random()*6));

let okk=()=>{
    setTimeout(()=>{
        alert("Hello")
    },3000)
}

let a=0
let ok=()=>{
    setInterval(()=>{
        
        console.log(a)
        a++
    },3000)
}