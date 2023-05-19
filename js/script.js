


let resultado = document.querySelector('.resultado')
let botao = document.getElementById('btn-contar')
botao.addEventListener('click', Calcular)




function Calcular(){

    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passos = document.getElementById('passos')
    let iconNext = '<i class="bi bi-arrow-right-square-fill"></i>'
    let iconArrived = '<i class="bi bi-geo-fill"></i>'

    let start = Number(inicio.value)
    let end = Number (fim.value)
    let step = Number (passos.value)
 
 

    //Se o número de passos informados ao executar 1 única vez já me levará até o destino
   if((step == 0 &&  start == 0 && end == 0) || (start == 0 && end == 0)){
        alert('Todos os campos devem ser preenchidos !')
    }
    if(start < end){
        //contagem progressiva
        for (let i = start; i <= end; i += step) {
            resultado.innerHTML += ` ${i} \u{1F449}`
        }
    }else {          
        //contagem regressiva
        for (let i = start; i >= end; i -= step) {
         resultado.innerHTML += ` ${i} \u{1F449}`
        }
    }
    resultado.innerHTML += `\u{26F3}`
    Reset(inicio,passos,fim)
}

//Reseta campos
function Reset(inicio,passos,fim){
    //Apagando campos
    inicio.value = ''
    fim.value = ''
    passos.value =''
}