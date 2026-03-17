# HOF => Higher Order Functions
# Funções que recebem outra função como parâmetro

def calcular(numero1, numero2, operacao):
    return operacao(numero1, numero2)

def soma(num1, num2):
    return num1 + num2

def subtracao(num1, num2):
    return num1 - num2

def divisao(num1, num2):
    return num1 / num2

def multiplicacao(num1, num2):
    return num1 * num2

resultado_soma = calcular(10, 10, soma)
print("O resultado da soma é:", resultado_soma)

resultado_subtracao = calcular(10, 10, subtracao)
print("O resultado da subtração é:", resultado_subtracao)

resultado_divisao = calcular(10, 10, divisao)
print("O resultado da divisão é:", resultado_divisao)

resultado_multiplicacao = calcular(10, 10, multiplicacao)
print("O resultado da multiplicação é:", resultado_multiplicacao)