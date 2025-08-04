let showData=()=>{
    localStorage.setItem("username","adi")
    localStorage.setItem("userage",20)

    location.reload()
}

let clearData=()=>{
    localStorage.removeItem("username")
    localStorage.removeItem("userage")
    // show.innerHTML=localStorage.removeItem("username")
   location.reload()
}

let show=document.querySelector("#display")
show.innerHTML=localStorage.getItem("username")