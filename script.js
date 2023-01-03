// index.html
// Main Screen: changing words when clicking (thinkers -> writers -> founders ->...)
const subs = [
  "moms.",
  "dads.",
  "brothers.",
  "sisters.",
  "Anjas.",
  "Eddys.",
  "Leandros.",
  "thinkers.",
  "founders.",
  "writers.",
  "dreamers.",
  "emotions.",
  "moments.",
  "Laurins.",
  "Justins.",
  "Lucas.",
  "Michos.",
  "Leolos.",
  "Carls.",
];

const gift = document.querySelector(".present");

const thinkers = document.getElementById("thinkers");
thinkers.addEventListener("click", () => {
  let randNum = Math.round(Math.random() * subs.length);
  // if (randNum !== 19) {
  //   console.log(randNum);
  //   thinkers.innerHTML = subs[randNum];
  //   if (thinkers.innerHTML === "Michos.") {
  //     gift.classList.toggle("active");
  //   }
  // } else {
  //   thinkers.innerHTML = "situations.";
  //   console.log(randNum);
  // }
  thinkers.innerHTML = subs[randNum];
  if (subs[randNum] === "Michos.") {
    gift.classList.toggle("presentio");
  } else {
    gift.classList.remove("presentio");
  }
});

// little hover effect on the index page

// theme switch effect when slider is turned on at index.html

const toggle = document.querySelector(".slider");
const background = document.querySelector(".background-pic");
const indextext = document.querySelector(".main-intro-text");
const navlinks = document.querySelector(".navbar_links");

const backgroundPic = document.querySelector(".background-picture");

toggle.addEventListener("click", () => {
  background.classList.toggle("active");
  navlinks.classList.toggle("active");
  indextext.classList.toggle("active");
  navlinks.classList.toggle("active");
  backgroundPic.classList.toggle("active");
});
// btn_works.addEventListener("click", () => {

// });

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");

// const menuContainer = document.querySelector(".");

// classList returns CSS classnames of an element
// returns a DOMTokenList (read-only, but there are a few methods to add, toggle or remove CSS from the list)

// Display Mobile Menu

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  // toggle -> on one click the class gets added, on another it gets removed (toggling specific class names of an element)
};

menu.addEventListener("click", mobileMenu);

// Scroll-Funktion auf der History-Seite
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", slide("left"));
rightArrow.addEventListener("click", slide("right"));

function slide(direction) {
  const overviewList = document.querySelector(".overview-list");
  scrollCompleted = 0;
  const slideVar = setInterval(function () {
    if (direction == "left") {
      overviewList.scrollLeft -= 1000;
    } else {
      overviewList.scrollLeft += 1000;
    }
    scrollCompleted += 1000;
    if (scrollCompleted >= 100) {
      window.clearInterval(slideVar);
    }
  }, 50);
}

// Requests

fetch("http://localhost:3000")
  .then((res) => res.json())
  .then((data) => {
    memoriesContainer.innerHTML = JSON.stringify(data);
  });
