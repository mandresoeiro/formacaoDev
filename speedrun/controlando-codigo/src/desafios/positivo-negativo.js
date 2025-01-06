const MIN = -562;
const MAX = 413;

let qtdePositivos = 0;
let qtdeNegativos = 0;

for(let i = MIN; i <= MAX; i++) {
    if (i > 0) {
        qtdePositivos++;
    } else if (i < 0) {
        qtdeNegativos++;
    }
}           

console.log(`Quantidade de números positivos: ${qtdePositivos}`);
console.log(`Quantidade de números negativos: ${qtdeNegativos}`);