//Faça um programa que faça a soma de duas matrizes.

function somarMatrizes(A, B) {
  let linhas = A.length;
  let colunas = A[0].length;
  let resultado = [];

  for (let i = 0; i < linhas; i++) {
    resultado[i] = [];
    for (let j = 0; j < colunas; j++) {
      resultado[i][j] = A[i][j] + B[i][j];
    }
  }

  return resultado;
}

// Exemplo
let M1 = [
  [1, 2],
  [3, 4]
];

let M2 = [
  [5, 6],
  [7, 8]
];

let soma = somarMatrizes(M1, M2);

console.log("Resultado da soma de M1 + M2:");
console.table(soma);
