let nota = 0;

while (nota <= 9.5) {
    // nota = Math.floor(Math.random() * 10);
    // console.log(nota);
    console.log('Você preecisa ser aprovado com louvor para passar no exame');
   nota = (Math.random() * 10).toFixed(2);
}

console.log(`A nora do aluno foi ${nota}`);