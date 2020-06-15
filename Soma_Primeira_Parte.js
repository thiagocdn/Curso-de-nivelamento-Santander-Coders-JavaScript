function somaLucroSemestre(umSemestre) {
  return umSemestre[0] + umSemestre[1] +
      umSemestre[2] + umSemestre[3] +
      umSemestre[4] + umSemestre[5];
}

var lucroUltimoSemestre = [50, -12, 1000, 300, 200, 0];
var lucrosPrimeiroQuadrimestre = [80, 453, 1000, -100];
var lucrosPrimeiroTrimestre = [80, 453, 1000];
console.log(somaLucroSemestre(lucroUltimoSemestre));
console.log(somaLucroSemestre(lucrosPrimeiroQuadrimestre));
console.log(somaLucroSemestre(lucrosPrimeiroTrimestre));