const sectionNav = document.querySelector(".section__nav");
const navBar = document.querySelector(".nav__bar");
const navContainer = document.querySelector(".nav__container");

let startPos = 0;
let endPos = 0;
let curPos = 0;
let offset = 0;

const deg = parseInt(
  getComputedStyle(sectionNav)
    .getPropertyValue("transform")
    .match(/(-?[0-9\.]+)/g)[4]
);
// 숨기기 위해 이동한 값
console.log(deg);

sectionNav.addEventListener("touchstart", handleStart);
sectionNav.addEventListener("touchmove", handleMove);
sectionNav.addEventListener("touchend", handleEnd);
sectionNav.addEventListener("click", navOpen);

function navOpen() {
  sectionNav.style.transform = `translateX(0px)`;
  if (!sectionNav.classList.contains("hidden")) {
    navBar.classList.add("hidden");
  }
}
//Touch Start
function handleStart(evt) {
  startPos = evt.changedTouches[0].pageX; //터치 시작 좌표
  curPos = startPos;
  console.log("startPos: ", startPos);
}
// Touch ing....~
function handleMove(evt) {
  console.log("curPos: ", curPos);
  curPos = evt.changedTouches[0].pageX; // 터치중 이동중 좌표
  offset = deg + curPos;
  console.log("offset: ", offset);
  if (offset >= 0) {
    sectionNav.style.transform = "translateX(0)";
  } else if (offset <= deg) {
    sectionNav.style.transform = `translateX(-${deg}px)`;
  } else {
    sectionNav.style.transform = `translateX(${offset}px)`;
  }
}

//Touch End
function handleEnd(evt) {
  endPos = evt.changedTouches[0].pageX; //터지 종료 좌표
  console.log("endPos: ", endPos);
  if (endPos > Math.abs(deg) / 2) {
    sectionNav.style.transform = "translateX(0)";
    navBar.classList.add("hidden");
  } else {
    sectionNav.style.transform = `translateX(${deg}px)`;
    if (navBar.classList.contains("hidden")) {
      navBar.classList.remove("hidden");
    }
  }
}
