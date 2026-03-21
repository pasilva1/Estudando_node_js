// HOF => Higher Order Functions === Funções que recebe outra função como paramentro
function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2)
}

function soma(num1, num2) {
    return num1 + num2
}

function subtracao (num1, num2) {
    return num1 - num2
}

function divisao (num1, num2) {
    return num1 / num2
}

function multiplicao (num1, num2) {
    return num1 * num2
}

const resultadoSoma = calcular(10, 10, soma)
console.log('O resultado da soma de é:', resultadoSoma)

const resultadoSubtracao = calcular(10, 10, subtracao)
console.log('O resultado da subtração é:', resultadoSubtracao)

const resultadoDivisao = calcular(10, 10, divisao)
console.log('O resultado da divisão é:', resultadoDivisao)

const resultadoMultiplicacao = calcular(10, 10, multiplicao)
console.log('O resultado da multiplição é:', resultadoMultiplicacao)