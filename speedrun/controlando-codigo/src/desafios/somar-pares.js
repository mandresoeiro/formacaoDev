const MIN = 0;
const MAX = 100;


let valorTotal = 0;

for (let i = MIN; i <= MAX; i++) {
    if (i % 2 === 0) {
        valorTotal += i;
    }
}

console.log(`O valor total é ${valorTotal}.`);
console.log(`A soma dos números pares entre ${MIN} e ${MAX} é ${valorTotal}.`);