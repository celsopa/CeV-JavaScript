function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)

    var contagem = document.getElementById('contagem')
    
    if (inicio == 0 || fim == 0){
        contagem.innerHTML = `<h4>Impossível contar!</h4>`
        if (inicio == 0){
            contagem.innerHTML += `<p>Início = ${inicio}</p>`
        }
        if (fim == 0){
            contagem.innerHTML += `<p>Fim = ${fim}</p>`
        }
    } else if (inicio < fim) {
        if (passo <= 0){
            alert("[ERRO] Passo inválido, considerando PASSO = 1")
            passo = 1
        }
        contagem.innerHTML = "<strong>Contagem crescente...</strong></br>"
        for (var c = inicio; c <= fim; c += passo){
            if ( c+passo > fim){
                contagem.innerHTML += `${c} `
            } else {
                contagem.innerHTML += `${c} \u{27A1}`
            }
        }
        contagem.innerHTML += '\u{1F3C1}'
    } else {
        if (passo==0){
            alert("[ERRO] Passo não pode ter valor 0, considerando PASSO = 1")
            passo = 1
        }
        contagem.innerHTML = "<strong>Contagem decrescente...</strong></br>"
        for (var c = inicio; c >= fim; c -= passo){
            if ( c-passo < fim){
                contagem.innerHTML += `${c} `
            } else {
                contagem.innerHTML += `${c} \u{27A1}`
            }
        }
        contagem.innerHTML += '\u{1F3C1}'
    }
}

