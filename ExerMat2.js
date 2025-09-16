//Faça um algoritmo que construa uma matriz 50 por 50 de números reais e depois de construída,
//colocar o conteúdo de sua diagonal principal dentro de um vetor e depois do vetor montado,
//imprimir o vetor.

function criarMatriz50x50() {
  const tamanho = 50;
  let matriz = [];

  for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
    for (let j = 0; j < tamanho; j++) {
      matriz[i][j] = parseFloat((Math.random() * 100).toFixed(2)); // número real
    }
  }

  return matriz;
}

function extrairDiagonalPrincipal(matriz) {
  let diagonal = [];

  for (let i = 0; i < matriz.length; i++) {
    diagonal.push(matriz[i][i]); // linha == coluna → elemento da diagonal
  }

  return diagonal;
}

// Executando
let matriz50 = criarMatriz50x50();
let diagonal = extrairDiagonalPrincipal(matriz50);

console.log("Diagonal principal da matriz 50x50:");
console.log(diagonal);
