const form = document.querySelector('.form');

// Adiciona um event listener para o formulário para calcular o IMC quando o formulário é enviado
form.addEventListener('submit', function(event) {
  // Previne que o formulário seja enviado
  event.preventDefault();

  // Obtém os inputs de peso e altura
  const inWeight = event.target.querySelector('.weight');
  const inHeight = event.target.querySelector('.height');

  // Converte o valor dos inputs para números
  const weight = Number(inWeight.value);
  const height = Number(inHeight.value);

  // Valida se o peso e a altura são números válidos
  if (isNaN(weight) || isNaN(height)) {
    printResult('Invalid weight or height!', false);
    return;
  };

  // Calcula o IMC
  const bmi = getBmi(weight, height);
  // Obtem a classificação do indice IMC
  const bmiIndex = getBmiIndex(bmi);
  // Cria a mensagem com a classificação IMC 
  const message = `Your BMI is ${bmi} (${bmiIndex})`

  // Exibe o resultado
  printResult(message, true);
});

function getBmi(weight, height) {
  const bmi = weight / height ** 2;
  return bmi.toFixed(2);
};

// Obtem a classificação do IMC
function getBmiIndex(bmi) {
  const index = [
    "Normal",
    "Overweight",
    "Obesity",
    "Severe Obesity"
  ];
  if (bmi >= 39.9) return index[3];
  if (bmi >= 29.9) return index[2];
  if (bmi >= 24.9) return index[1];
  if (bmi >= 18.5) return index[0];
  return "Underweight";
};

// Exibe o resultado
function printResult(message, valid) {
  const result = document.querySelector('.result');
  // Cria um elemento p
  const p = document.createElement('p');
  // Limpa o elemento result
  result.innerHTML = '';

  // Adiciona a classe goodResult ou badResult dependendo da validade do resultado
  if (valid) {
    p.classList.add('goodResult');
  } else {
    p.classList.add('badResult');
  };

  // Adiciona o texto da mensagem ao elemento p
  p.innerHTML = message;
  // Adiciona o elemento p ao elemento result
  result.appendChild(p);
};
