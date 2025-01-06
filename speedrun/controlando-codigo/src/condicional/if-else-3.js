// const nota = 6.7;
// const nota = Math.random() * 10;
const nota = (Math.random() * 10).toFixed(2);
// const notaMinima = 7;


if (nota >= 9) {
    console.log('Quadro de Honra');
    console.log('Ganhou desconto na próxima vez');
} 
else  if (nota >= 7) {
        console.log('Aprovado');
        console.log('Passou no exame');
    } else if (nota >= 5) {
            console.log('Recuperação');
            console.log('Passou no exame');
    }   else {
        console.log('Reprovado');

    }
    
    console.log('A nota do aluno foi  ${nota}');		