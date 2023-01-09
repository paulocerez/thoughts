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

const thinkers = document.getElementById("thinkers");
if (thinkers) {
  thinkers.addEventListener("click", () => {
    let randNum = Math.round(Math.random() * subs.length);
    if (randNum !== 19) {
      console.log(randNum);
      thinkers.innerHTML = subs[randNum];
      if (thinkers.innerHTML === "Michos.") {
        gift.classList.toggle("active");
      }
    } else {
      thinkers.innerHTML = "situations.";
      console.log(randNum);
    }
  });
}
//   thinkers.innerHTML = subs[randNum];
//   if (subs[randNum] === "Michos.") {
//     gift.classList.toggle("presentio");
//   } else {
//     gift.classList.remove("presentio");
//   }
// });

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

if (leftArrow && rightArrow) {
  leftArrow.addEventListener("click", slide("left"));
  rightArrow.addEventListener("click", slide("right"));
}

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

// fetch("http://localhost:3000")
//   .then((res) => res.json())
//   .then((data) => {
//     memoriesContainer.innerHTML = JSON.stringify(data);
//   });

// THOUGHT.HTML
window.addEventListener("load", () => {
  const form = document.querySelector("#new-thought-form");
  const date_input = document.querySelector("#date-input");
  const thought_input = document.querySelector("#thought-input");
  const th_input = document.querySelector("#mood-input");
  const thoughts_el = document.querySelector("#thoughts");

  // this event handler prevents the page from refreshing when a form is submitted ->
  // preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be
  // -> in case of the submit button it refreshes by default
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // der Variable thought wird der input-Wert aus dem Thought-Input zugewiesen
    const thought = thought_input.value;

    if (!thought) {
      // wenn das Thought-Feld nicht ausgefüllt wurde, dann erscheint diese Fehlermeldung
      alert("Please fill out all the required fields! :)");
    }
    // über .createElement können neue nodes des DOM erstellt und auf diesem platziert werden
    const thought_el = document.createElement("div");
    // dem erstellten Element eine Klasse zuweisen -> in diesem Fall ein thought-Element
    thought_el.classList.add("thought");

    // ein weiteres Element erstellen -> der content eines thoughts (hat den input-Text inne)
    const thought_content_el = document.createElement("div");
    // content-Klasse hinzufügen
    thought_content_el.classList.add("content");

    // dem content-Element den inneren Text (eines HTML-Elements) zuweisen -> in diesem Fall dem String, der über das input-Feld eingegeben wurde
    // thought_content_el.innerText = thought;

    // dem thought-Element wird ein child-Element zugefügt, welches aus dem neu geschaffenen content-Element besteht
    thought_el.appendChild(thought_content_el);

    // ein input Element erstellen
    const thought_input_el = document.createElement("input");
    // dem Input-Element die Klasse "text" hinzufügen
    thought_input_el.classList.add("text");
    // den Input Type des Elements zu "text" ändern
    thought_input_el.type = "text";
    // den Wert des inputs zu dem eingegebenen thought input ändern
    thought_input_el.value = thought;
    // das Attribut "readonly" zum input Element hinzufügen
    thought_input_el.setAttribute("readonly", "readonly");
    // dem content Element das input Element als child hinzufügen
    thought_content_el.appendChild(thought_input_el);

    // Div erstellen, der die content-Buttons enthält
    const actions_buttons_el = document.createElement("div");
    actions_buttons_el.classList.add("actions");

    const task_del_button = document.createElement("button");
    task_del_button.classList.add("delete");
    task_del_button.innerHTML = "delete";

    const task_edit_button = document.createElement("button");
    task_edit_button.classList.add("edit");
    task_edit_button.innerHTML = "edit";

    // die Buttons dem action div zuweisen, den div seinem parent zuweisen
    actions_buttons_el.appendChild(task_del_button);
    actions_buttons_el.appendChild(task_edit_button);
    thought_content_el.appendChild(actions_buttons_el);

    // der Thoughtssammlung das thought-Element als child hinzufügen
    thoughts_el.appendChild(thought_el);
    input.value = "";

    task_edit_button.addEventListener("click", (e) => {
      if (task_edit_button.innerText.toLowerCase() == "edit") {
        task_edit_button.innerText = "save";
        thought_input_el.removeAttribute("readonly");
        thought_input_el.focus();
      } else {
        task_edit_button.innerText = "edit";
        thought_input_el.setAttribute("readonly", "readonly");
      }
    });
    task_del_button.addEventListener("click", (e) => {
      thoughts_el.removeChild(thought_el);
    });
  });
});

// remove Funktion für den Remove Button schreiben (als EventListener)
// const reset_form = document.querySelector("#reset-form");

// reset_form.addEventListener("click", () => {});
