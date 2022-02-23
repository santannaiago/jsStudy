let rls = require('readline-sync')

console.log('Bem-vindo a sua calculadora de juros de terminal (:')
let valorOriginal = Number(rls.question('\nInforme o valor devido: '))

if (valorOriginal > 0) {
  
  let diasAtraso = Number(rls.question('Informe quantos dias se passaram desde o vencimento do boleto: '))
  let juros
  
  if (diasAtraso > 0) {
    if (diasAtraso <= 15) {
      juros = 5
    }
    else {
      juros = 10
    }
    
    let valorFinal = valorOriginal + ((valorOriginal * juros) / 100)
    
    console.log('\nValor original da dívida: ' + valorOriginal)
    console.log('Dias atrasados: ' + diasAtraso)
    console.log('Taxa de juros: ' + juros)
    console.log('Valor total com juros: ' + valorFinal)
  }
  else {
    console.log('\nNão há juros a ser adicionado')
  }
}
else {
  console.log('\nVocê não deve nada (:')
}