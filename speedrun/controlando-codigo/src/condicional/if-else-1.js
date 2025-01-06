const senha = '123';

// console.log(senha.length)
// console.log(senha === '1234' ? 'Senha válida' : 'Senha inválida');

const temLetraMaiscula =true;
const tamanhoValido = senha.length >= 6;

if (temLetraMaiscula && tamanhoValido >= 6) {
    console.log('Senha válida');
} else {
    console.log('Senha inválida');
}
