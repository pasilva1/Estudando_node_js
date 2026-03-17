//1. Função de saudação
//Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.
function saudacao() {
    console.log("Olá! Seja bem-vindo(a)!");
}

// Chamando a função
saudacao();

//2. Função com parâmetros
//Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."
function apresentarPessoa(nome, idade) {
    console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");
}

// Chamando a função
apresentarPessoa("Patrick", 30);

//3. Cálculo de IMC
//Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
//A função deve calcular o IMC utilizando a fórmula:
//
//IMC = peso / (altura * altura)
//
//A função deve retornar o valor do IMC.
//Depois, utilize o retorno da função para exibir no console uma mensagem com o resultado.

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

// chamando a função
let resultadoIMC = calcularIMC(101, 1.75);

// exibindo o resultado
console.log("Seu IMC é: " + resultadoIMC.toFixed(2));

//5. Número par ou ímpar//
//Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores.//

function ehPar(numero) {
    return numero % 2 === 0;
}

// Testando a função
console.log(ehPar(4)); // true
console.log(ehPar(7)); // false
console.log(ehPar(10)); // true

//6. Função soma
//Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa.
function soma(numero1, numero2) {
    return numero1 + numero2;
}

// chamando a função
let resultado = soma(5, 8);

// exibindo no console
console.log("A soma dos números é: " + resultado);

//7. Reutilizando código
//Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.
//A função deve receber dois parâmetros: valorCompra e valorPago.
//
//A função deve:
//
//calcular o valor do troco
//retornar o valor calculado
//Depois, utilize o retorno da função para exibir o valor do troco no console.

function calcularTroco(valorCompra, valorPago) {
    let troco = valorPago - valorCompra;
    return troco;
}

// chamando a função
let resultadoTroco = calcularTroco(50, 100);

// exibindo o resultado
console.log("O valor do troco é: R$ " + resultadoTroco);

//8. Arrow function
//Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.
const soma1 = (numero1, numero2) => numero1 + numero2;

let resultado = soma1(5, 7);

console.log(`A soma dos números é: ${resultado}`);

//9. Callback simples

//Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!".
