function checarResposta(e){
    
    let alternative = e.target
    let pai = alternative.parentElement
    let bloco = pai.dataset.bloco
    let answer = document.querySelector('.answer' + bloco)
    let result = document.querySelector('.result' + bloco)
    let image = document.querySelector('.imagem' + bloco)
    //console.log(bloco)

    if(alternative.classList.contains('correct')){
        // Trocar o texto do resultado
        result.textContent = 'Acertou :)'
        // Mostrar Imagem
        image.style.display = 'initial'
    }


    else{
        // Trocar o texto do resultado
        result.textContent = 'Errou'
    }


    // Mostrar answer
    // Sobescrevendo o display que estava escondido
    answer.style.display = 'initial'

}

// Seleciona todas as li
let alternativas = document.querySelectorAll('li') 

// Para cada li
for (let alternativa of alternativas){
    // Ouça o evento de click e rode a função
    alternativa.addEventListener('click', checarResposta)
}
