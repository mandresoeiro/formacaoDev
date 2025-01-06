function somar(x, y, funcao) {
  let resultado = x + y;
  console.log(typeof funcao);
  if (funcao) {
    return funcao(resultado);
  } else {
    return resultado;
  }
   return x + y; 
}
let x = 3;
let y = 7;

let doblo = function(numero) {
  return numero * 2;
};

let triplo = function(numero) {
  return numero * 3;
};

console.log(somar(x , y, triplo));
console.log(somar(x , y, triplo));