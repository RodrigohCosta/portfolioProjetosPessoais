const ligar = document.getElementById('acender');
const desligar = document.getElementById('apagar');
const lamp = document.getElementById('lampada');

function acende(){
    if(!verifLampada()){
    lamp.src = '/img/lampada-acesa.jpg'
    }
}

function apaga(){
    if(!verifLampada()){
    lamp.src = '/img/lampada-apagada.jpg'
    }
}

function ligarLampada(){
    if(!verifLampada()){
    lamp.src = '/img/lampada-acesa.jpg'
    }
}

function desligLampada(){
    if(!verifLampada()){
    lamp.src = '/img/lampada-apagada.jpg'
    }
}

function qbdLampada(){
    lamp.src = '/img/lampada-quebrada.jpg'
}

function verifLampada(){
    return lamp.src.indexOf('quebrada') > -1;
}

ligar.addEventListener('click', acende)
desligar.addEventListener('click', apaga)
lamp.addEventListener('mouseover', ligarLampada)
lamp.addEventListener('mouseleave', desligLampada)
lamp.addEventListener('dblclick', qbdLampada)

