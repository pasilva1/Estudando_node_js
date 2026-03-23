const ano = 2050

// deve ser divisivel por 4 mas NÃO divisivel por 100
//OU
//Deve ser divisivel por 100 e por 400

 if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
    console.log(`${ano} é Bissexto`);
 } else {
    console.log(`${ano} Não é Bissexto`);
 }