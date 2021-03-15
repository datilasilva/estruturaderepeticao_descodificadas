/* AULA DESCODIFICADAS  INTERVALO 2 - CONDICIONAL COMPOSTA - IMPAR OU par
(i % 2 != 0) Impar
(i % 2 == 0) Par
*/ 

function number () {
  for (var i = 1; i < 10; i++){
    if (i % 2 == 0) {
      console.log('o número', + i, 'é par')
    } else { 'o número', + i, 'é impar'}
  }
}
number();