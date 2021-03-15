/* AULA DESCODIFICADAS INTERVALO 2 CÁLCULO DE EMPRÉSTIMO*/ 
const emprestimoAna = 1000;
const juros = 20;
const numeroParcela = 10;
const calculoJuros = emprestimoAna * juros / 100;
console.log("Eu irei pagar como juros do empréstimo: R$", calculoJuros);
console.log("E 10 parcelas de: R$", (emprestimoAna + calculoJuros) / numeroParcela)