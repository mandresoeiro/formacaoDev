// Dicas para Aprender
// Pratique: Resolva problemas simples usando funções.
// Leia a Documentação: Consulte o MDN Web Docs sobre Funções.
// Explore Callbacks e Promises: É importante entender como funções são usadas no JavaScript assíncrono.
// Refatore Código: Substitua código repetitivo por funções reutilizáveis.

/* 1. Criando e Chamando uma Função*/
function cumprimentar(nome) {
  return `Olá, ${nome}!`;
}

console.log(cumprimentar("João")); // Saída: Olá, João!


// 2. Função sem Parâmetros

function dizerOi() {
    console.log("Oi!");
  }
  
  dizerOi(); // Saída: Oi!

//   3. Função com Parâmetros
function somar(a, b) {
    return a + b;
  }
  
  console.log(somar(5, 3)); // Saída: 8

  

//   4. Funções como Expressões
// Você pode armazenar uma função em uma variável:
const multiplicar = function (a, b) {
    return a * b;
  };
  
  console.log(multiplicar(4, 2)); // Saída: 8


//   5. Arrow Functions (Funções de Setas)
// Introduzidas no ES6, são uma forma mais curta de escrever funções:

const dividir = (a, b) => a / b;

console.log(dividir(10, 2)); // Saída: 5


// Outros Conceitos Importantes
// 1. Funções Anônimas
// Funções sem nome, geralmente usadas em callbacks:
setTimeout(function () {
    console.log("Olá depois de 2 segundos!");
  }, 2000);

//   2. Parâmetros Padrão
// Você pode definir valores padrão para parâmetros:

function saudacao(nome = "visitante") {
    return `Bem-vindo, ${nome}!`;
  }
  
  console.log(saudacao()); // Saída: Bem-vindo, visitante!
  console.log(saudacao("João")); // Saída: Bem-vindo, João!


//   3. Funções como Argumentos (Callback)
function calcular(a, b, operacao) {
    return operacao(a, b);
  }
  
  const soma = (x, y) => x + y;
  const subtracao = (x, y) => x - y;
  
  console.log(calcular(5, 3, soma)); // Saída: 8
  console.log(calcular(5, 3, subtracao)); // Saída: 2

//   4. Funções que Chamam a Si Mesmas (Recursão)

function fatorial(n) {
    if (n === 1) return 1;
    return n * fatorial(n - 1);
  }
  
  console.log(fatorial(5)); // Saída: 120
  
//   5. Closures
// Funções podem "lembrar" do escopo onde foram criadas:

function criarContador() {
    let contador = 0;
    return function () {
      contador++;
      return contador;
    };
  }
  
  const contador = criarContador();
  console.log(contador()); // Saída: 1
  console.log(contador()); // Saída: 2
  