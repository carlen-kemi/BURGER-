
















const links = document.querySelector(".list");
const close=document.querySelector(".close");
const open=document.querySelector(".open");

function openMenu(){
    links.style.display ="block"
    close.style.display ="flex"
    open.style.display ="none"
}

function closeMenu(){
    links.style.display = "none"
    close.style.display = "none"
    open.style.display = "flex"
}

open.addEventListener("click",openMenu)
close.addEventListener("click",closeMenu)



