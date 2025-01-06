// O que é um Array?
// Um array é uma coleção de elementos (dados), organizados de forma indexada. Em JavaScript, os arrays podem armazenar diferentes tipos de dados, como números, strings, objetos, ou até outros arrays.

// Criando um Array:
// const frutas = ["maçã", "banana", "laranja"]; // Array de strings
// const numeros = [1, 2, 3, 4, 5];            // Array de números
// const misturado = [1, "texto", true];       // Array com tipos mistos


// Acessando Elementos
// Os elementos de um array são acessados pelos índices, que começam em 0.

const frutas = ["maçã", "banana", "laranja"];

console.log(frutas[0]); // Saída: maçã
console.log(frutas[1]); // Saída: banana
console.log(frutas[2]); // Saída: laranja

// Operações Básicas com Arrays
// 1. Adicionar Elementos
// No final do array, use o método push() para adicionar um novo elemento:

frutas.push("uva");
console.log(frutas); // ["maçã", "banana", "laranja", "uva"]

// No início do array, use o método unshift() para adicionar um novo elemento:
frutas.unshift("abacaxi");
console.log(frutas); // ["abacaxi", "maçã", "banana", "laranja"]

// 2. Remover Elementos
// Use o método pop() para remover o ultimo elemento do array:
// Do final:
frutas.pop();
console.log(frutas); // ["maçã", "banana", "laranja"]

// Do início:
frutas.shift();
console.log(frutas); // ["banana", "laranja"]


// 3. Tamanho do Array
// Use .length para obter o tamanho:

console.log(frutas.length); // Saída: 3

// 4. Iterar sobre Arrays
// Usando for:

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }

//   Usando for...of:

for (let fruta of frutas) {
    console.log(fruta);
  }

//   Usando forEach:

frutas.forEach((fruta) => {
    console.log(fruta);
  });

//   Métodos Comuns de Arrays
// 1. Concatenar Arrays

const maisFrutas = ["uva", "melancia"];
const todasAsFrutas = frutas.concat(maisFrutas);

console.log(todasAsFrutas); // ["maçã", "banana", "laranja", "uva", "melancia"]

// 2. Fatiar um Array (slice)
// Extrai uma parte do array sem modificar o original:

const algumasFrutas = frutas.slice(1, 3); // Índices 1 e 2
console.log(algumasFrutas); // ["banana", "laranja"]

// 3. Remover ou Substituir Elementos (splice)
// Remover 1 elemento a partir do índice 1
frutas.splice(1, 1);
console.log(frutas); // ["maçã", "laranja"]

// Substituir elementos
frutas.splice(1, 1, "morango");
console.log(frutas); // ["maçã", "morango"]

// 4. Procurar Elementos
// Índice de um elemento:
console.log(frutas.indexOf("laranja")); // Saída: 2

// Verificar se existe:
console.log(frutas.includes("banana")); // Saída: true ou false

// 5. Ordenar Arrays
// Ordem crescente:
const numeros = [3, 1, 4, 2];
numeros.sort();
console.log(numeros); // [1, 2, 3, 4]

// Ordem decrescente:
numeros.sort((a, b) => b - a);
console.log(numeros); // [4, 3, 2, 1]

// 6. Transformar Arrays
const numerosDobro = numeros.map((num) => num * 2);
console.log(numerosDobro); // [2, 4, 6, 8]

// Filtrar elementos (filter):
const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log(numerosPares); // [2, 4]

// Reduzir elementos (reduce):
const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma); // Soma de todos os números

// 7. Transformar em String
const texto = frutas.join(", ");
console.log(texto); // "maçã, banana, laranja"

// // Dicas para Aprender Arrays
// Pratique os métodos mais usados, como push, pop, map, filter, e reduce.
// Experimente criar listas e trabalhar com elas em diferentes contextos.
// Use ferramentas como o console do navegador para testar o comportamento dos arrays.
// Consulte a Documentação do MDN.
// Se precisar de mais exemplos ou ajuda em projetos específicos, é só perguntar! 😊