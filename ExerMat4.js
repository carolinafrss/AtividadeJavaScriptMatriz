//Faça um programa que faça a multiplicação de duas matrizes.

function multiplicarMatrizes(A, B) {
  let linhasA = A.length;
  let colunasA = A[0].length;
  let colunasB = B[0].length;

  let resultado = [];

  for (let i = 0; i < linhasA; i++) {
    resultado[i] = [];
    for (let j = 0; j < colunasB; j++) {
      let soma = 0;
      for (let k = 0; k < colunasA; k++) {
        soma += A[i][k] * B[k][j];
      }
      resultado[i][j] = soma;
    }
  }

  return resultado;
}

// Exemplo
let A = [
  [1, 2],
  [3, 4]
];

let B = [
  [5, 6],
  [7, 8]
];

let C = multiplicarMatrizes(A, B);

console.log("Resultado da multiplicação de A x B:");
console.table(C);
