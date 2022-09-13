
const calcular = document.getElementById('calcular');




function imc(){
    const name = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const res = document.getElementById('res');

    if (name !== '' && altura !== '' && peso!== ''){
        
        const valorIMC = (peso/(altura*altura)).toFixed(2);

        let classif = '';
            
        if(valorIMC < 18.5){
            classif = 'muito abaixo do peso.'
        } else if (valorIMC < 25){
            classif = 'abaixo do peso.'
        } else if (valorIMC < 30){
            classif = 'no peso ideal.'
        } else if (valorIMC >=30){
            classif = 'em sobre-peso. Cuide da sua saúde!'
        }
        
        res.innerHTML = `${name}, o seu IMC é ${valorIMC}. Portanto, você está ${classif} `

    } else{
        alert('Preencha todos os campos');
    }

   
}
    

calcular.addEventListener('click',imc);