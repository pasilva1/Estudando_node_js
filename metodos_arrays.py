numeros = [1,  2, 3, 4, 5, 6, 7, 8, 9, 10]

numeroPares = [n for n in numeros if n % 2 == 0]
numeroImpares = [n for n in numeros if n % 2 == 1]

print('Todos os números:', numeros)
print('Números pares:', numeroPares)
print('Números ìmpares:', numeroImpares)