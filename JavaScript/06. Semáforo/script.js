const red = document.getElementById('vermelho');
const yellow = document.getElementById('amarelo');
const green = document.getElementById('verde');
const auto = document.getElementById('automatico');
const image = document.getElementById('sinal')

function sVermelho() {
    image.src = '/img/vermelho.PNG'
}

function sAmarelo(){
    image.src = '/img/amarelo.PNG'
}

function sVerde(){
    image.src = '/img/verde.PNG'
}

red.addEventListener('click',sVermelho)
yellow.addEventListener('click', sAmarelo)
green.addEventListener('click', sVerde)

