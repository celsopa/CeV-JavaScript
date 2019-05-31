function fatorial(n){
    var fat = 1
    for (n; n >= 1 ; n--){
        fat *= n
    }
    return fat
}

console.log(fatorial(5))