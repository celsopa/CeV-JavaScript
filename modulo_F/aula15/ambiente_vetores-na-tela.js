let lista1 = ['a', 'b','c','d','e','f','g','h','i','j','k', 'l', 'm','n','o','p', 'q', 'r', 's', 't', 'u', 'v', 'x','y', 'w','z']
let lista2 = [2,9,4,7,6,5,8,3,0,1]
console.log(`A lista ${lista2} tem ${lista2.length} elementos.`)
console.log(`A lista ${lista1} tem ${lista1.length} elementos.`)

// console.log('--------------------------------------------------------------------------------')
// for (let i = 0; i < lista.length ; i++){
//     console.log(`Índice ${i} -> ${lista[i]}`)
// }

console.log('--------------------------------------------------------------------------------')
for (var x in lista2){
    console.log(`Índice ${x} -> ${lista2[x]}`)
}

// for (var x in lista1){
//     console.log(`Índice ${x} -> ${list1a[x]}`)
// }