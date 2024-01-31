let $=document;
let menuBar=$.querySelector(".header__icon");
let menuBarIcon=$.querySelector(".header__icon i")
let menu=$.querySelector(".menu")
function showMenuBar(){
    if(menuBarIcon.classList.contains("fa-bars")){
        menu.style.left="0";
        menuBarIcon.classList="fa fa-times";
    }else{
        menu.style.left="-256px";
        menuBarIcon.classList="fa fa-bars";
    }
}
menuBar.addEventListener("click",showMenuBar);