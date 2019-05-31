function tabuada(){
    let num = Number(document.getElementById('numero').value)
    let papel = document.getElementById('papel')
    
    if (num >= 0){
        var i = 1
        papel.innerHTML = ''
        while (i <= 10){
            console.log(i)
            var item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            papel.appendChild(item)
            i++
        }       
    } else {
        papel.innerHTML = `<option>Digite um número</option>`
        alert('[ERRO] Digite um número maior ou igual a 0.')
    }
}