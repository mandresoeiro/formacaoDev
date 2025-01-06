function somar(x = 0, y = 0) {
   return x + y;  
}

let resultado1 = somar(5, 3);              // Chamando a função com dois argumentos
let resultado2 = somar(3);                 // Chamando a função com um argumento
let resultado3 = somar();                  // Chamando a função sem argumentos
let resultado4 = somar(1, 2, 3, 4, 5, 6);  // Chamando a função com argumentos extras

console.log(resultado1); // Saída: 8
console.log(resultado2); // Saída: 3
console.log(resultado3); // Saída: 0
console.log(resultado4); // Saída: 3

// Explicação:
// somar(5, 3):

// Retorna 5 + 3 = 8.
// somar(3):

// O valor de x é 3, e y assume o valor padrão 0.
// Retorna 3 + 0 = 3.
// somar():

// Ambos os parâmetros usam seus valores padrão.
// Retorna 0 + 0 = 0.
// somar(1, 2, 3, 4, 5, 6):

// Somente os dois primeiros argumentos (1 e 2) são usados.
// Os demais (3, 4, 5, 6) são ignorados.
// Retorna 1 + 2 = 3.
// Se você deseja somar todos os argumentos fornecidos, independentemente de quantos sejam, pode usar o operador rest (...).

// Se você deseja somar todos os argumentos fornecidos, independentemente de quantos sejam, pode usar o operador rest (...).

// Código com operador rest:

function somar(...numeros) {
   return numeros.reduce((total, num) => total + num, 0);
}

let resultado1 = somar(5, 3);
let resultado2 = somar(3);
let resultado3 = somar();
let resultado4 = somar(1, 2, 3, 4, 5, 6);

console.log(resultado1); // Saída: 8
console.log(resultado2); // Saída: 3
console.log(resultado3); // Saída: 0
console.log(resultado4); // Saída: 21

// Explicação do operador rest:
// O operador ...numeros coleta todos os argumentos passados à função em um array chamado numeros.
// O método reduce soma todos os elementos do array, com um valor inicial de 0.
// Agora, a função é flexível para lidar com qualquer quantidade de argumentos.



// Em JavaScript, você pode comentar várias linhas de duas maneiras:

// 1. Comentários de Bloco (Recomendado para várias linhas)
// Use /* e */ para delimitar o bloco de comentário:

