var seg = 0
var min = 0
var hra = 0
var intervalo

function unit(digito){
    if(digito < 10){
    return ('0'+digito)

    }else {
        return (digito)
    }
} 
    
    

function inicio(){
    contador()
    intervalo = setInterval(contador,1000)
}

function parar(){ 
    clearInterval(intervalo)
}

function zerar(){
    clearInterval(intervalo)
    seg = 0
    min = 0
    document.getElementById('contador').innerHTML = '00:00:00'
}

function contador(){
    seg ++
    if(seg == 60) {
    min++
    seg=0
        if (min == 60) {
            hra ++
            min = 0
            
        }
   }
    document.getElementById('contador').innerHTML = unit(hra)+':'+unit(min)+':'+unit(seg)
}