/* AULA DESCODIFICADAS INTERVALO 2 OPERADORES RELACIONAIS      
|| ou
&& e
*/ 

var a = 2;
var b = 3;
var c = 5;

console.log("Resultado operadores relacionais: ", a <= 2, b >= 5, c === 9 );
console.log("Resultado operadores lógicos: ", a <= 6 || b >= 5)
console.log("Resultado operadores lógicos: ", a <= 1 && b >= 8)

/*  junção de operadores lógicos e relacionais para um triângulo, sendo que a soma de cada lado deve ser menor que a soma dos outros lados*/

var l1 = 2;
var l2 = 2;
var l3 = 2;

var tri = (l1 < l2 + l3) && (l2 < l1 + l3) && (l3 < l1 + l2);
var eq = (l1 == l2) && (l2 == l3);
var es = (l1 != l2) && (l2 != l3) && (l1 != l3);

console.log ("Pode formar um triângulo:", tri);
console.log ("O triângulo é equilátero:", eq);
console.log ("O triângulo é escaleno:", es);

