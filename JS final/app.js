let happy=()=>{
   let display= document.querySelector("#show")
   display.style.backgroundImage="url(4.jpeg)"
}

let sad=()=>{
    let display=document.querySelector("#show")
    display.style.backgroundImage="url(1.jpeg)"
}

let angry=()=>{
    let display=document.querySelector("#show")
    display.style.backgroundImage="url(2.jpeg)"
}

let excited=()=>{
    let display=document.querySelector("#show")
    display.style.backgroundImage="url(3.jpeg)"
}

let count=0

let random=()=>{
    let display=Math.floor(Math.random()*4)+1
    let image=`url("${display}.jpeg")`
    let display1=document.querySelector("#show")
    display1.style.backgroundImage=image

    display2=document.querySelector("#shownum")
    display2.innerHTML=count++
}

let num=parseInt(prompt("enter number"))
for (let i = 1; i <= num; i++) {
        if (num%i === 0) {
          console.log(i);
        }
      }
