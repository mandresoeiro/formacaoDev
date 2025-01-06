function Pessoa(nome, sobrenome) {
    this.nome = nome; // Corrigido para usar o parâmetro `nome`
    this.sobrenome = sobrenome; // Corrigido para usar o parâmetro `sobrenome`
    this.idade = 15;

    this.falar = function () { // Corrigido o nome do método para `falar`
        return `${this.nome} ${this.sobrenome} está falando.`; // Ajustado o retorno para concatenar corretamente
    };
}

const pessoa1 = new Pessoa('Marcos', 'Silva', '15');
const pessoa2 = new Pessoa('Luiza', 'Maria', '35');


// console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

// console.log(pessoa2);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);

console.log(pessoa1.falar());
console.log(pessoa2.falar());
console.log(pessoa1.sobrenome);
