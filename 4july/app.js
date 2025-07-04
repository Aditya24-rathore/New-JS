// for(let b=20;b>=1;b--){
//     console.log(b);
// }


// for(let a=2;a<=3;a++){
//     for(let b=1;b<=10;b++){
//         console.log(a*b)
//     }
// }

// for(let a=1;a<=5;a++){
//     for(let b=1;b<=5;b++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

for(let r=1;r<=5;r++){
    for(let c=1;c<=5;c++){
     if(r==1 || r==5 || c==1 || c==5){
        document.write("*")
     }
     else{
        document.write("&nbsp&nbsp")
     }
    }
    document.write("<br>")
}