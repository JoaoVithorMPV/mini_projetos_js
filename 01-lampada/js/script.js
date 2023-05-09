const botaoLigDesJS = document.getElementById("botaoLigDes");
const lamp = document.getElementById("lamp");

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

function funcaoLigDes() {
  if (botaoLigDesJS.textContent == "Ligar") {
    lampOn();
    botaoLigDesJS.textContent = "Desligar";
  } else {
    lampOff();
    botaoLigDesJS.textContent = "Ligar";
  }
}

botaoLigDesJS.addEventListener("click", funcaoLigDes);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);

lamp.addEventListener("dblclick", lampBroken);
