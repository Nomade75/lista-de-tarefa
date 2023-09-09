const inputText = document.querySelector('input');
//pegando o campo input

function limparCampo(){
    inputText.value = '';
    inputText.focus();
}

function acoesNaPagina(){

document.addEventListener('click',(element)=>{
    let elementoClicado = element.target;
    if(elementoClicado.classList.contains('button')){   

        criarTarefa(inputText.value);
        limparCampo()  
        
    }
    //funcao que ouve o clique num determinado elemento e executa uma acao
});

document.addEventListener('keypress',(e)=>{
    if(e.keyCode == 13){
        criarTarefa(inputText.value);
        limparCampo() 

    }
    //funcao para detectar pressionamento de tecla
})

document.addEventListener('click',(e)=>{
    let elemento = e.target;
    if(elemento.classList.contains('delete')){
        elemento.parentElement.remove();
        
    }
    //funcao que remove o iten da lista com base em seu elemento pai
})
}acoesNaPagina();

function criarItenLista(){
    let itenLista = document.createElement('li');
    return itenLista;
    //cria uma li e retorna a mesma
}

function criarTarefa(tarefa){
    let containerTarefa = document.querySelector('.lista');
    let itenLista = criarItenLista();
    itenLista.innerText = tarefa;
    criarBotaoDelete(itenLista)
    containerTarefa.appendChild(itenLista);
    //cria a tarefa
}

function criarBotaoDelete(itenLista){
    let itenDaLista = itenLista;
    let botaoDelete = document.createElement('button');
    botaoDelete.setAttribute('class','delete')
    botaoDelete.innerText = 'Apagar';
    itenDaLista.innerText += ' '
    itenDaLista.appendChild(botaoDelete);
    //cria um botao de apagar junto da tarefa
}