const switchCnt = document.getElementById("switch-cnt");
const switchC1 = document.getElementById("switch-c1");
const switchC2 = document.getElementById("switch-c2");
const switchCircles = document.querySelectorAll(".switch__circle");
const switchBtns = document.querySelectorAll(".switch-btn");
const submitBtns = document.querySelectorAll(".submit");
const aContainer = document.getElementById("a-container");
const bContainer = document.getElementById("b-container");

const main = () => {
  submitBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => e.preventDefault())
  );
  switchBtns.forEach((btn) => btn.addEventListener("click", switchForm));
};

const switchForm = () => {
  switchCnt.classList.add("is-gx");
  setTimeout(() => {
    switchCnt.classList.remove("is-gx");
  }, 1500);

  switchCnt.classList.toggle("is-txr");
  switchCircles[0].classList.toggle("is-txr");
  switchCircles[1].classList.toggle("is-txr");

  switchC1.classList.toggle("is-hidden");
  switchC2.classList.toggle("is-hidden");
  aContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-z200");
};

window.addEventListener("load", main);
