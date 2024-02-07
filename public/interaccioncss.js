window.addEventListener("scroll",function(){
    let header= document.querySelector("nav");
    header.classList.toggle("abajo",window.scrollY>0);
})