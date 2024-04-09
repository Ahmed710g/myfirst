let stars=document.getElementById("stars");
let moon=document.getElementById("moon");
let mountains3=document.getElementById("mountains3");
let mountains4=document.getElementById("mountains4");
let river=document.getElementById("river");
let boat=document.getElementById("boat");
let name=document.querySelector(".name");
window.onscroll=function(){
    let value=scrollY;
    console.log(value);
    stars.style.left=value+'px';
    moon.style.top=value*3+'px';
    mountains3.style.top=value*1.5+'px';
    mountains4.style.top=value*1.5+'px';
    river.style.top=value+'px';
    boat.style.left=value*3+'px';
    name.style.fontSize=value+'px';

    if(scrollY>67){
    name.style.fontSize=67+'px';
    if(scrollY>=427){
        name.style.display="none";
    }
    else{
        name.style.display="block"
    }
    if(scrollY>=127){
        document.querySelector(".main").style.background="linear-gradient(#847563,transparent)";
    
    }else{
        document.querySelector(".main").style.background="linear-gradient(to top,#200016,transparent)";
}
    

}




}