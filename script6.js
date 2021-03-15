/* AULA DESCODIFICADAS  INTERVALO 2 - CONDICIONAL ANINHADA - 
cálculo IMC
*/ 
let massa = 200;
let altura = 1.65;
const imc = massa / (altura * altura);

if (imc < 18.5){
    console.log('Você está magro com IMC em:',  imc);
} else if (imc >= 25 && imc <= 29.9) { 
    console.log("Você está com peso médio e seu IMC é de:", imc);
} else if (imc >= 30 && imc <= 39.9) {
    console.log("Você está com sobre peso e seu IMC é de:", imc);
} else if (imc >= 40) {
    console.log("Você está com obesidade morbida e seu IMC é de:", imc);
}
    
