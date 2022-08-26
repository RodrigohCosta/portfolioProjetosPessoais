
var second = 0
var minutes = 0
var intervalo

function inicio(){
   intervalo = setInterval(contador,1000)
}

function parar(){
    clearInterval(intervalo)
    if(second < 10){
        document.getElementById('relogio').innerHTML = `0${second}`
    } else{
    document.getElementById('relogio').innerHTML = `${second}`
    }
        
}

function zerar(){
    clearInterval(intervalo)
    document.getElementById('relogio').innerHTML = `00`
}

function contador(){
    second++
    if(second < 10){
        document.getElementById('relogio').innerHTML = `0${second}`
    } else{
    document.getElementById('relogio').innerHTML = `${second}`
    }
}