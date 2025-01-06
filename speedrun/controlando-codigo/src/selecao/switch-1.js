const nota = +(Math.random() * 10).toFixed(2);
let conceito;

function conceito(conceito) {
    console.log(conceito);
}

switch (Math.floor(nota)) {
    case 10:
    case 9:
        conceito('A');
        break;
   
    case 8: 
        conceito('B');
        break;
    case 7:
    case 6:
        conceito('C');  
        break;  
           
    case 5:
    case 4:
        conceito('E');    
        break
    
    case 3:
    case 2:
        conceito('F');    
        break
    
    default:
        conceito('G');

}

console.log(`A nota do aluno foi ${nota} e o conceito foi ${conceito}`);
console.log('Fim!');