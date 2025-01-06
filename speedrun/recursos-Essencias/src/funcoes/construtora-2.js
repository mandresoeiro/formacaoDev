function Contador(valorInicial = 0) {
    this.numero = valorInicial;


    this.incrementar = function () {
        this.numero++;
    };

    this.decrementar = function () {
        this.numero--;
    };
}

// Criar um objeto ou instanciar um objeto a partir de uma construtora
const contador = new Contador(100);
console.log(contador.numero); // Saída: 0

contador.incrementar();
contador.incrementar();
contador.incrementar();

console.log(contador.numero); // Saída: 1

contador.decrementar();
contador.decrementar();

console.log(contador.numero); // Saída: -1

const outroContador = new Contador(10);

console.log(outroContador.numero); // Saída: 10
console.log(contador.numero); // Saída: 0
