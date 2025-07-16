// DOM is a tree like strucure of html where js can change,delete dynamically
function addText() {
    // let T=document.getElementById("text")
    let T=document.querySelector("#text")
    // T.innerHTML="Hello from Js"
    T.innerText="Hello from js"
    T.style.color="red"
    T.style.backgroundColor="black"

}

function Change(){
    let Y=document.querySelector("#text1")
    let X=document.querySelector("#text2")
    X.innerHTML="hello from Html"
    Y.innerHTML="Text from js"
    X.style.color="Yellow"
    Y.style.backgroundColor="Black"
    X.style.backgroundColor="Black"
    Y.style.color="Orange"
}

function changeColor(){
    let Cr=document.querySelector("#colour")
    Cr.style.color="Red"
}

function Red(){
    let Cg=document.querySelector("#colour")
    Cg.style.color="Green"
}
