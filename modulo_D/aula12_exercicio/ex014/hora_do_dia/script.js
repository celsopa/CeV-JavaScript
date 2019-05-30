function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var secao = document.getElementById('secao')
    
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${minuto}m`
    if (hora > 6 && hora < 12){
        img.src = "img/fotodia.png"
        document.body.style.background = '#6BBAE8'
    } else if (hora >= 12 && hora < 18){
        img.src = "img/fototarde.png"
        document.body.style.background = '#D48F40'
    } else {
        img.src = "img/fotonoite.png"
        document.body.style.background = '#7E8386'        
    }
}

