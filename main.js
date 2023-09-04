let form = document.querySelector("form");
let template = document.querySelector("template");
let wrapper = document.querySelector(".data-js-form");

function handleSubmit(e) {
  e.preventDefault();

  let rating = new FormData(e.target).get("rating");

  if (rating) {
    wrapper.addEventListener("animationend", () => {
      wrapper.innerHTML = template.innerHTML.replace(/{{ rating }}/, rating);
      wrapper.classList.replace("animate-out", "animate-in");
    });
    playSound();
    wrapper.classList.add("animate-out");
    wrapper.style.height = wrapper.offsetHeight + "px";
  }
}

function playSound() {
  let audio = new Audio("./audio/whoosh-cinematic-161021.mp3");
  audio.volume = 1
  audio.play();
}

form.addEventListener("submit", handleSubmit);
