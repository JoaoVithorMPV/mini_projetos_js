const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorIndex = 0;

const trafficLight = (event) => {
  turOn[event.target.id]();
};

const nextIndex = () => {
  if (colorIndex < 2) {
    colorIndex++;
  } else {
    colorIndex = 0;
  }
};

const changecolor = () => {
  const colores = ["red", "yellow", "green"];
  const color = colores[colorIndex];
  turOn[color]();
  nextIndex();
};

const turOn = {
  red: () => (img.src = "./img/vermelho.png"),
  yellow: () => (img.src = "./img/amarelo.png"),
  green: () => (img.src = "./img/verde.png"),
  automatic: () => setInterval(changecolor, 1000),
};

buttons.addEventListener("click", trafficLight);
