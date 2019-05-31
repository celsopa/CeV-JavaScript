var txtnum = document.getElementById("numero")

var lista = document.getElementById("lista_num")
var res = document.getElementById("resultado")

function adicionar(){
    var num = Number(txtnum.value)
    var lista_num = document.getElementsByTagName("option")
    if (txtnum.value <= 100 && txtnum.value > 0){
        if (lista_num.length == 0) {
            var opt = document.createElement("option")
            opt.text = `Número: ${num}`
            opt.value =`${num}`
            lista.appendChild(opt)
            limpar()
        } else {
            var achou = 0
            for (let i = 0; i < lista_num.length; i++) {
                if (num == Number(lista_num[i].value)) {
                    achou++
                }
            }
            if (achou == 0){
                var opt = document.createElement("option")
                opt.text = `Número: ${num}`
                opt.value =`${num}`
                lista.appendChild(opt)
                limpar()
            } else {
                alert("[ERRO] Número já adiconado!")
            }
        }
    } else {
        alert("[ERRO] Valor inválido!")
    }
}

function analisar(){
    var lista_num = document.getElementsByTagName("option")
    if (lista_num.length == 0){
        alert("[ERRO] Informe ao menos um valor!")
    } else{
        var soma = 0
        var maior = lista_num[0].value
        var menor = lista_num[0].value
        var media = 0
        for (let c = 0; c < lista_num.length; c++){
            if (lista_num[c].value > maior){
                maior = lista_num[c].value
            }
            if (lista_num[c].value < menor){
                menor = lista_num[c].value
            }
            soma += Number(lista_num[c].value)
        }
        media = soma/lista_num.length
        res.innerHTML = `<p>Você digitou ${lista_num.length} número(s).</p>
        <p>O maior número digitado foi ${maior}</p>
        <p>O menor número digitado foi ${menor}</p>
        <p>A soma de todos os númeors digitados é ${soma}</p>
        <p>A média de todos os númeors digitados é ${media}</p>`
    }
}

function limpar(n=0){
    if (n) {
        lista.innerHTML = ""
        res.innerHTML = ""
        txtnum.value = ""
        txtnum.focus()
    } else {
        res.innerHTML = ""
        txtnum.value = ""
        txtnum.focus()
    }
}
