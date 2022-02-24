const sectionNav = document.querySelector(".section__nav");
const navBar = document.querySelector(".nav__bar");
const navContainer = document.querySelector(".nav__container");

let startPos = 0;
let endPos = 0;
let curPos = 0;
let offset = 0;

const deg = parseInt(getComputedStyle(sectionNav).getPropertyValue("transform").match(/(-?[0-9\.]+)/g)[4]);
console.log(deg);

sectionNav.addEventListener("touchstart", handleStart);
sectionNav.addEventListener("touchmove", handleMove);
sectionNav.addEventListener("touchend", handleEnd);

function handleStart(evt) {
  startPos = evt.changedTouches[0].pageX;
  curPos = startPos;
  console.log("startPos: ", startPos);
  if (navBar.classList.contains("hidden")) {
    navBar.classList.remove("hidden");
  }
}

function handleMove(evt) {
  console.log("curPos: ", curPos);
  curPos = evt.changedTouches[0].pageX;
  offset = deg + curPos;
  console.log("offset: ", offset);
  if (offset >= 0) {
    sectionNav.style.transform = "translateX(0)";
  } else {
    sectionNav.style.transform = `translateX(${offset}px)`;
  }
}

function handleEnd(evt) {
  endPos = evt.changedTouches[0].pageX;
  console.log("endPos: ",endPos);
  if (endPos > Math.abs(deg)/2) {
    sectionNav.style.transform = "translateX(0)";
    navBar.classList.add("hidden");
  } else {
    sectionNav.style.transform = `translateX(-${deg}px)`;
  }

  if (endPos >= Math.abs(deg) - 20) {
    navBar.classList.add("hidden");
  }
}
