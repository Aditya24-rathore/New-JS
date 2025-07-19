// Regular Function
function fun() {
    
}

// arrow function:- it is a sortest way to write a function if you have one line of code no need to write return and {}

let okk=(a,b)=>{
    return(a+b)
}
alert(okk(2,5))

// IIFE:- Imediatily invoke function expression
(
    function(){
        alert("IIFE")
    }
)()

// Annonymus Function
let func=function(){
alert("Anonymus Function")
}
func()