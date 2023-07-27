function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked) {
          genero = 'Homem'
          if (idade >=0 && idade < 12) {
             //criança
             img.setAttribute('src', 'homem-criança.jpg')
          } else if ( idade < 21) {
            //jovem
            img.setAttribute('src', 'homem-jovem.jpg')
          } else if ( idade < 50) {
            //adulto
            img.setAttribute('src', 'homem.jpg')
          } else {
            //idoso
            img.setAttribute('src', 'homem-idoso.jpg')
          }
       } else if (fsex[1].checked) {
            genero = 'Mulher '
            if (idade >=0 && idade < 12) {
                //criança
                img.setAttribute('src', 'mulher-criança.jpg')
             } else if ( idade < 21) {
               //jovem
               img.setAttribute('src', 'mulher-jovem.jpg')
             } else if ( idade < 50) {
               //adulto
               img.setAttribute('src', 'mulher.jpg')
             } else {
               //idoso
               img.setAttribute('src', 'mulher-idosa.jpg')
             }
        }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}