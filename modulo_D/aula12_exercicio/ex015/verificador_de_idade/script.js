const anoatual = new Date().getFullYear()
var nascimento = document.getElementById('nascimento')
var imagem = document.getElementById('imagem')

function carregar(){
    nascimento.max = anoatual
}


function gerar(){
   if (nascimento.value.length == 0 || nascimento.value > anoatual || nascimento.value < 1900){
       alert('[ERRO] Ano de nascimento inválido!')
       imagem.src = "img/semrosto.png"
       document.getElementById('restexto').innerText = ``

   } else {
        var sexo = document.getElementsByName('radiosex')
        var idade = anoatual - nascimento.value
        if (sexo[0].checked){
            var genero = 'Homem' 
        } else {
            var genero = 'Mulher' 
        }
        
        if (sexo[0].checked) {
            if (idade <=5) {
                imagem.src = "img/bebeh.png"
            } else if (idade <= 10){
                imagem.src = "img/criancah.png"
            } else if (idade <= 20){
                imagem.src = "img/jovemh.png"
            } else if (idade <= 40) {
                imagem.src = "img/adultoh.png"
            } else if (idade > 40 ) {
                imagem.src = "img/idosoh.png"
            }
        } else {
            if (idade <=5) {
                imagem.src = "img/bebem.png"
            } else if (idade <= 10){
                imagem.src = "img/criancam.png"
            } else if (idade <= 20){
                imagem.src = "img/jovemm.png"
            } else if (idade <= 40) {
                imagem.src = "img/adultom.png"
            } else if (idade > 40 ) {
                imagem.src = "img/idosom.png"
            }
        }
        document.getElementById('restexto').innerText = `Criado(a) ${genero} com ${idade} anos.`
   }
}



