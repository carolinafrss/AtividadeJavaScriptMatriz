//Faça um programa que gere uma matriz transposta (Matriz transposta é toda a matriz onde são
//trocadas as linhas pelas colunas, ou vice-versa).

function transporMatriz(matriz) {
  let linhas = matriz.length;
  let colunas = matriz[0].length;
  let transposta = [];

  for (let j = 0; j < colunas; j++) {
    transposta[j] = [];
    for (let i = 0; i < linhas; i++) {
      transposta[j][i] = matriz[i][j]; // troca linha por coluna
    }
  }

  return transposta;
}

// Exemplo
let original = [
  [1, 2, 3],
  [4, 5, 6]
];

let transposta = transporMatriz(original);
console.log("Matriz original:");
console.table(original);

console.log("Matriz transposta:");
console.table(transposta);

