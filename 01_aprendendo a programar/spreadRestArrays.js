const frutas = ['Maça', 'Melão', 'Manga']

const maisFrutas = ['Uva', 'Morango', 'Kiwi']

const clone = { ...frutas}

frutas.push('Pitanga')

console.log(frutas)
console.log(maisFrutas)
console.log(clone)