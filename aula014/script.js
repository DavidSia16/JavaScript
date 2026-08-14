
function verificar() {

    var data = new Date()
    var ano = data.getFullYear() 
    var fano = window.document.getElementById('txtano') 
    var res = window.document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] veifique os campos e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if( fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 10 && idade <= 10) {
                img.setAttribute('src', 'img/criançamenino.jpg')
            } else if( idade < 21) {
                img.setAttribute('src', 'img/adolescentemenino.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/homen.jpg')
            } else{
                img.setAttribute('src', 'img/idosohomen.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 10 && idade <= 10) {
                img.setAttribute('src', 'img/criançamenina.jpg')
            } else if( idade < 21) {
                img.setAttribute('src', 'img/adolescentemenina.jpg')       
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher.jpg')
            } else{
                img.setAttribute('src', 'img/idosamulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        
    }

}