const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const inWeight = event.target.querySelector('.weight');
  const inHeight = event.target.querySelector('.height');
  const weight = Number(inWeight.value);
  const height = Number(inHeight.value);

  if (!weight) {
    printResult('Invalide weight!', false);
    return;
  };

  if (!height) {
    printResult('Invalide height!', false);
    return;
  };

  const bmi = getBmi(weight, height);
  const bmiIndex = getBmiIndex(bmi);
  const message = `Your BMI is ${bmi} (${bmiIndex})`

  printResult(message, true);
});

function getBmi(weight, height) {
  const bmi = weight / height ** 2;
  return bmi.toFixed(2);
};

function getBmiIndex(bmi) {
  const index = [
    "Underweight",
    "Normal",
    "Overweight",
    "Obesity",
    "Severe Obsity"
  ];
  if (bmi >= 39.9) return index[4];
  if (bmi >= 29.9) return index[3];
  if (bmi >= 24.9) return index[2];
  if (bmi >= 18.5) return index[1];
  if (bmi < 18.5) return index[0];
};

function pCreator() {
  const p = document.createElement('p');
  return p;
};

function printResult(message, valid) {
  const result = document.querySelector('.result');
  const p = pCreator();
  result.innerHTML = '';


  if (valid) {
    p.classList.add('goodResult');
  } else {
    p.classList.add('badResult');
  };

  p.innerHTML = message;
  result.appendChild(p);
};
