let clicks=document.querySelector("#click")
let count=0

function increment(){
    count++
    clicks.innerHTML=count
}

function decrement(){
    count--
    clicks.innerHTML=count
    
}

function reset(){
    clicks.innerHTML=0
}