const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";

    if (valorIMC <= 18.5) {
      classificacao = "abaixo do peso";
    } else if (valorIMC <= 25) {
      classificacao = "no peso ideal, parabéns!";
    } else if (valorIMC <= 30) {
      classificacao = "levemente acima do peso";
    } else if (valorIMC <= 35) {
      classificacao = "com obesidade grau I";
    } else if (valorIMC <= 40) {
      classificacao = "com obesidade grau II";
    } else if (valorIMC > 40) {
      classificacao =
        "com obesidade grau III; procure um médico o mais rápido possível";
    }
    resultado.textContent = `${nome}, o seu IMC é ${valorIMC} e você está ${classificacao}!`;
  } else {
    alert("Preencha todos os campos, por favor!");
  }
}

calcular.addEventListener("click", imc);
