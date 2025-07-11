// BOM(Browser object model) methods prompt,alert,confirm to display the msg in the html page on browser
function age(){
    let age=confirm("Are you 18+")
    if(age){
        alert("ur eligible")
    }
    else{
        alert("ur not eigible")
    }
}
age()