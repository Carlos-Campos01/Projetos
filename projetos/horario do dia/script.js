function carregar (){
   
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        //bom dia
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#FFDEAD'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = '#F4A460'
    } else {
        //boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#4F4F4F'
    }

    
}
