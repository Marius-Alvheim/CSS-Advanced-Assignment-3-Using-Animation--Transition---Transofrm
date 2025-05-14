const mainEl = document.getElementById("main");
const bounceBalls = document.getElementById("bounce");
const balls = document.getElementById("balls");
let counter = 0;

bounceBalls.addEventListener("click", () => {
  const element = document.createElement("p");
  const img = document.createElement("img");
  img.src = "./images/batman.jpg";
  img.classList.add("batman");
  element.textContent = "My balls are on the loose😲";
  mainEl.append(element, img);

  bounceBalls.remove();
  startBounce();

  return element;
});

const bounce = () => {
  const element = document.createElement("div");
  element.classList.add("ball");
  balls.appendChild(element);
  return element;
};

const startBounce = () => {
  const myInterval = setInterval(() => {
    bounce();
    counter++;
    if (counter === 6) {
      clearInterval(myInterval);
    }
  }, 1000);
};
