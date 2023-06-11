// variable declaration
var windowWidth = "";
var windowHeight = window.innerHeight;
var nav = document.getElementById("nav");
var navWidth = nav.offsetWidth;
var navWidth2 = nav.clientWidth;
let output = document.getElementById("output");
let hamburger = document.getElementById("hamburger");
let hamBut = document.getElementById("ham-but");
let hamIcon = document.getElementById("ham-icon");
// gets the width of the screen immediately its loaded
window.onload = function(){
    windowWidth = window.innerWidth;
}
// updates the value of the width of the window onreload
window.onresize = function(){    
    windowWidth = window.innerWidth;
  chechWidth()
}
// adds stuffs when the width is below 792
function chechWidth(){
      output.innerText = "window is " + windowWidth + " wide";
    if (windowWidth < 792){
        output.classList.add("small");
        nav.classList.add("small-nav");
        hamburger.classList.add("")
    }else{
        output.classList.remove("small"); 
        nav.classList.remove("small-nav");
    }
}
// changes the icon of the hamburger onclick
function cancel(){
    hamIcon.classList.add("fa-xmark");
    hamBut.setAttribute('onclick',"lines()");
}
// change the icon of the hamburger back to the default
function lines(){
    hamIcon.classList.replace("fa-xmark","fa-bars");
    hamBut.setAttribute("onclick","cancel()");
}