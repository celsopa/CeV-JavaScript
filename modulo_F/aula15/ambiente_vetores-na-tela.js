let lista = ['a', 'b','c','d','e','f','g','h','i','j','k', 'l', 'm','n','o','p', 'q', 'r', 's', 't', 'u', 'v', 'x','y', 'w','z']
console.log(`A lista ${lista} tem ${lista.length} elementos.`)
// console.log('--------------------------------------------------------------------------------')
// for (let i = 0; i < lista.length ; i++){
//     console.log(`Índice ${i} -> ${lista[i]}`)
// }
console.log('--------------------------------------------------------------------------------')
for (var x in lista){
    console.log(`Índice ${x} -> ${lista[x]}`)
}