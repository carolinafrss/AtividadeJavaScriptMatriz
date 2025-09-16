//Faça um algoritmo que construa uma matriz de nome MAT de 10 linhas e 15 colunas contendo
//números inteiros. Em seguida escreva a soma dos elementos de cada linha e se a soma dos
//elementos é par ou impar. Por fim escreva a soma dos elementos de cada coluna e se a soma dos
//elementos é par ou impar.

// Função para criar matriz 10x15 com números inteiros aleatórios
function criarMatriz() {
  const linhas = 10;
  const colunas = 15;
  let MAT = [];

  for (let i = 0; i < linhas; i++) {
    MAT[i] = [];
    for (let j = 0; j < colunas; j++) {
      MAT[i][j] = Math.floor(Math.random() * 100); // número inteiro entre 0 e 99
    }
  }
  return MAT;
}

// Função para verificar se um número é par ou impar
function parOuImpar(num) {
  if (num % 2 === 0) return "par";
  else return "ímpar";
}

// Função para somar elementos de cada linha e informar se é par ou ímpar
function somaLinhas(MAT) {
  for (let i = 0; i < MAT.length; i++) {
    let soma = 0;
    for (let j = 0; j < MAT[i].length; j++) {
      soma += MAT[i][j];
    }
    console.log(`Linha ${i} - soma: ${soma} (${parOuImpar(soma)})`);
  }
}

// Função para somar elementos de cada coluna e informar se é par ou ímpar
function somaColunas(MAT) {
  let linhas = MAT.length;
  let colunas = MAT[0].length;

  for (let j = 0; j < colunas; j++) {
    let soma = 0;
    for (let i = 0; i < linhas; i++) {
      soma += MAT[i][j];
    }
    console.log(`Coluna ${j} - soma: ${soma} (${parOuImpar(soma)})`);
  }
}

// Executando as funções
let matriz = criarMatriz();
console.log("Matriz gerada:");
console.table(matriz);

console.log("\nSoma das linhas:");
somaLinhas(matriz);

console.log("\nSoma das colunas:");
somaColunas(matriz);
