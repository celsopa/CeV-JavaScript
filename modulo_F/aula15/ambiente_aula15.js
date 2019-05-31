// let num = []
// console.log(num)
// num.push('z')
// console.log(num)
// num[1] = 'a'
// num[2] = 'p'
// console.log(num)
// num.sort()
// console.log(num)
// num.pop()
// console.log(num)
var num = [2,4,6, 8, 10, 12]
num.unshift(99)
console.log(num)
var x = 3
var ind = num.indexOf(x)
if (ind == -1){
    console.log(`Elemento ${x} não está na lista.`)
} else {
    console.log(`Elemento ${x} no índice ${ind}`)
}