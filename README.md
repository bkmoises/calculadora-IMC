# Calculadora IMC
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/devsuperior/sds1-wmazoni/blob/master/LICENSE)

[Link do projeto.](https://bkmoises.github.io/calculadora-IMC/)

Esse é um simples aplicativo JavaScript feito para calcular o *Índice de Massa Corporal (IMC)* de uma pessoa com base no seu peso e altura. 

O *Índice de Massa Corporal (IMC)* é uma medida usada para avaliar o nível de gordura corporal de uma pessoa. Ele é calculado dividindo o peso de uma pessoa (em quilogramas) pela altura (em metros) elevada ao quadrado. O resultado é um número que pode ser comparado com uma tabela de classificação para determinar se a pessoa está no peso normal, acima do peso ou obesa.
[Saiba mais.](https://www.uol.com.br/vivabem/faq/imc-como-calcular-tabela-dicas-como-melhorar-e-mais.htm)

## Sobre o Código

Este aplicativo calcula o Índice de Massa Corporal (IMC) de uma pessoa com base nos valores de peso e altura inseridos no formulário. Quando o formulário é enviado, o código impede que seja enviado e seleciona os elementos de entrada peso e altura. 
Ele converte os valores desses elementos em números e valida que não são do tipo *NaN*. Caso sejam, chama a função *printResult()* para exibir uma mensagem de erro. E na sequência, chama a função *getBmi()* para calcular o IMC, passando os valores de peso e altura. Em seguida, ele chama a função *getBmiIndex()* para classificar o IMC em uma das quatro categorias: 
"**Normal**", "**Underweight**", "**Overweight**", "**Obesity**", ou "**Severe Obesity**". 
O código então cria uma string de mensagem que inclui o IMC calculado e sua classificação, e chama a função *printResult()* para exibir essa mensagem. A função *printResult()* primeiro limpa qualquer mensagem anterior, cria um novo elemento p e adiciona a mensagem como seu HTML interno. Ele também adiciona uma classe de "*goodResult*" ou "*badResult*" dependendo se a mensagem é válida ou não, e acrescenta o elemento *p* ao elemento *.result*. 

## Nota

É importante ressaltar que as classificações usadas aqui podem não corresponder às classificações recomendadas pela *Organização Mundial da Saúde (OMS)* ou outras organizações de saúde, e esse código não deve ser usado para fins médicos ou de diagnóstico.

## Dependências

Navegador Web.

## Layout

![bmi-calculator-layout](https://github.com/bkmoises/calculadora-IMC/blob/main/assets/img/bmi-calculator-layout.png)
