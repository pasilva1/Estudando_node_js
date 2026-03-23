const num1 = 2;
const num2 = 4;
//const operacao = 'soma';
const operacao = 'multiplicação';

if (operacao === 'soma') {
    console.log('Somando ', num1 + num2); 
} else if (operacao === 'multiplicação'){
    console.log('Multiplicando ', num1 * num2);
} else {
    console.log('Operação não identificada!');
    
}
console.log('');
console.log('');
console.log('');

//$11.000 e acima: 3% de bônus
//
//$7.000 a $10.999: 5% de bônus
//
//$4.000 a $6.999: 7% de bônus
//
//$3.999 ou menos: 9% de bônus


const salario = 140000;
percentual = 0;
nome_colaborador = 'Patrick'

if (salario >= 11000) {
    percentual = 3;
    console.log( nome_colaborador, ', recebe' ,percentual, '% de bônus');    
} else if (salario >= 7000) {
    percentual = 5;
    console.log( nome_colaborador, ', recebe' ,percentual, '% de bônus');
} else if (salario >= 4000) {
    percentual = 7;
    console.log( nome_colaborador, ', recebe' ,percentual, '% de bônus');
} else {
     percentual = 9;
     console.log( nome_colaborador, ', recebe' ,percentual, '% de bônus');
}

const bonus = (salario / 100) * percentual;
const salarioFInal = salario + bonus

console.log('Salário: ', salario);
//console.log('Bônus: ', percentual, '%');
console.log('Valor do bônus: R$', bonus);
console.log('Salário com Bônus R$ ', salario + bonus);

console.log('');
console.log('');
console.log('');


