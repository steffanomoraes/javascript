function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('inas')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano)
    {
        window.alert('Verifique os dados e tente novamente!')
    }
    else {
        fsex = document.getElementsByName('sex')
        var idade = ano - fano.value
        var genero = document.getElementsByName('sex')
        
        res.innerHTML = `Idade calculada: ${idade}`

    }
}