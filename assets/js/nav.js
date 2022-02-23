const navBar = document.querySelector(".nav__bar");

const navContainer = document.querySelector(".nav__container");

let startPos = 0;
let endPos = 0;
let curPos = 0;

navBar.addEventListener("touchstart", handleStart);
navBar.addEventListener("touchmove", handleMove);
navBar.addEventListener("touchend", handleEnd);

function handleStart(evt){
    startPos = evt.changedTouches[0];
    console.log("startPos: ",startPos);
}

function handleMove(evt){
    curPos
}

function handleEnd(evt){

}