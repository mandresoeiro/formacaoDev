function somar(a) {
   return function (b) {
      return a + b;
   }
}


const somar5 = somar(5);
const somarComMIl = somar(1000);



console.log(somar5(5));
console.log(somarComMIl(100));

