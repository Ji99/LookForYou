const sectionNav = document.querySelector(".section__nav");
const navBar = document.querySelector(".nav__bar");
const navContainer = document.querySelector(".nav__container");

let startPos = 0;
let endPos = 0;
let curPos = 0;
let offset = 0;
sectionNav.addEventListener("touchstart", handleStart);
sectionNav.addEventListener("touchmove", handleMove);
sectionNav.addEventListener("touchend", handleEnd);

function handleStart(evt) {
  startPos = evt.changedTouches[0].pageX;
  curPos = startPos;
  console.log("startPos: ", startPos);
}

function handleMove(evt) {
  console.log("curPos: ", curPos);
  curPos = evt.changedTouches[0].pageX;
  offset = -240 + curPos;
  if (offset >= 0) {
    sectionNav.style.transform = "translateX(0)";
  } else {
    sectionNav.style.transform = `translateX(${offset}px)`;
  }
}

function handleEnd(evt) {
  endPos = evt.changedTouches[0].pageX;
  if (endPos > 120) {
    sectionNav.style.transform = "translateX(0)";
  } else {
    sectionNav.style.transform = "translateX(-240px)";
  }
}
