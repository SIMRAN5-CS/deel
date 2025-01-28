console.log("hi")
const arr=["11111","22222","33333","44444"]
console.log(document.getElementsByClassName("tax")[0].children[0].children[0].innerHTML)
var i=0;
const changeWord=()=>{
    document.getElementsByClassName("tax")[0].children[0].children[0].innerHTML=arr[i];
    if(i<3){i++;}
    
}
var timer=setInterval(()=>changeWord(),1500)
setTimeout(()=>clearInterval(timer),5000)