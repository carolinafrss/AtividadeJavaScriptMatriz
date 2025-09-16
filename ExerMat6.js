//Faça um programa que deverá permitir que o usuário entre com os valores dos elementos de uma
//matriz quadrada de ordem 4 e possibilite o usuário realizar as seguintes funcionalidades:
//a) Imprimir todos os elementos da matriz;
//b) Somar os quadrados de todos os elementos da primeira coluna;
//c) Somar todos os elementos da terceira linha;
//d) Somar os elementos da diagonal principal; e
//e) Somar todos os elementos de índice par da segunda linha.
//Observação: Organize o programa em forma de o usuário ter acesso as funcionalidades através de
//menus. Escreva o seu código utilizando os subprogramas que achar conveniente para ter um código
//legível e bem escrito. Segue um exemplo de uma matriz.
// M = [1 2 3 4]
//     [5 6 7 8]
//     [9 10 11 12]
//     [13 14 15 16]

const prompt = require('prompt-sync')(); // Use 'npm install prompt-sync' se necessário

function criarMatriz4x4() {
  let matriz = [];

  for (let i = 0; i < 4; i++) {
    matriz[i] = [];
    for (let j = 0; j < 4; j++) {
      matriz[i][j] = parseInt(prompt(`Digite o valor da posição [${i}][${j}]: `));
    }
  }

  return matriz;
}

function imprimirMatriz(matriz) {
  console.log("Matriz:");
  console.table(matriz);
}

function somarQuadradosPrimeiraColuna(matriz) {
  let soma = 0;
  for (let i = 0; i < 4; i++) {
    soma += Math.pow(matriz[i][0], 2);
  }
  console.log("Soma dos quadrados da 1ª coluna:", soma);
}

function somarTerceiraLinha(matriz) {
  let soma = 0;
  for (let j = 0; j < 4; j++) {
    soma += matriz[2][j]; // terceira linha = índice 2
  }
  console.log("Soma da 3ª linha:", soma);
}

function somarDiagonalPrincipal(matriz) {
  let soma = 0;
  for (let i = 0; i < 4; i++) {
    soma += matriz[i][i];
  }
  console.log("Soma da diagonal principal:", soma);
}

function somarElementosParesSegundaLinha(matriz) {
  let soma = 0;
  for (let j = 0; j < 4; j++) {
    if (matriz[1][j] % 2 === 0) {
      soma += matriz[1][j];
    }
  }
  console.log("Soma dos elementos pares da 2ª linha:", soma);
}

// Programa principal
let matriz = criarMatriz4x4();

let opcao;
do {
  console.log("\nMenu:");
  console.log("1 - Imprimir matriz");
  console.log("2 - Somar quadrados da 1ª coluna");
  console.log("3 - Somar elementos da 3ª linha");
  console.log("4 - Somar diagonal principal");
  console.log("5 - Somar elementos pares da 2ª linha");
  console.log("0 - Sair");

  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case '1':
      imprimirMatriz(matriz);
      break;
    case '2':
      somarQuadradosPrimeiraColuna(matriz);
      break;
    case '3':
      somarTerceiraLinha(matriz);
      break;
    case '4':
      somarDiagonalPrincipal(matriz);
      break;
    case '5':
      somarElementosParesSegundaLinha(matriz);
      break;
    case '0':
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida.");
  }

} while (opcao !== '0');
