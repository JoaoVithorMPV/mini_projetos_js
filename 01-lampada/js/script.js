const turnOn = document.getElementById("turnOn");
const lamp = document.getElementById("lamp");
const turnOff = document.getElementById("turnOff");

function islampbroken() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!islampbroken()) {
    lamp.src = "./img/ligada.jpg";
  }
}

function lampOff() {
  if (!islampbroken()) {
    lamp.src = "./img/desligada.jpg";
  }
}

function lampBroken() {
  lamp.src = "./img/quebrada.jpg";
}

turnOn.addEventListener("click", lampOn);
lamp.addEventListener("mouseover", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseleave", lampOff);

lamp.addEventListener("dblclick", lampBroken);
