console.log('Verificando a capacidade eleitoral...')
var idade = 17
console.log(`Com ${idade} anos você: `)
if (idade < 16){
    console.log('Não vota.')
} else if (idade >= 18) {
        console.log('Voto obrigatório.')
} else {
        console.log('Voto facultativo.')
}