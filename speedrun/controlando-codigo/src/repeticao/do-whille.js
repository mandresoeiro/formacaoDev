let nota = 0;

do {
  console.log("Você preecisa ser aprovado com louvor para passar no exame");
  nota = (Math.random() * 10).toFixed(2);
} while (nota <= 9);

console.log(`A nora do aluno foi ${nota} foi excelente`);
