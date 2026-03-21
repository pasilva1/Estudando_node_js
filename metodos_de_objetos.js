const pessoa = {
    nome: 'Vinicius',
    idade: 37,
    pets: ['Simba', 'Aladim'],
    nacionalidade: 'Brasileiro'
}

for(const chave in pessoa) {
    console.log('Chave: ', chave)
    console.log('Valor:' , pessoa)
}