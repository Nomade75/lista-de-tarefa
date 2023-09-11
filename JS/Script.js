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
        if(!inputText.value) return
        criarTarefa(inputText.value);
        criarLocalStorage()
        limparCampo()  
        
    }
    //funcao que ouve o clique num determinado elemento e executa uma acao
});

document.addEventListener('keypress',(e)=>{
    if(e.keyCode == 13){
        if(!inputText.value) return
        criarTarefa(inputText.value);
        criarLocalStorage()
        limparCampo() 

    }
    //funcao para detectar pressionamento de tecla
})

document.addEventListener('click',(e)=>{
    let elemento = e.target;
    if(elemento.classList.contains('delete')){
        elemento.parentElement.remove();
        criarLocalStorage()
        
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
    containerTarefa.appendChild(itenLista);
    criarBotaoDelete(itenLista)
    //cria a tarefa
}

function criarBotaoDelete(itenLista){
   itenLista.innerText += ' ';
   let criarBotaoDelete = document.createElement('button');
   criarBotaoDelete.innerText = "Apagar";
   criarBotaoDelete.setAttribute('class','delete');
   itenLista.appendChild(criarBotaoDelete);
    //cria um botao de apagar junto da tarefa
}

function criarLocalStorage(){
    const tarefas = document.querySelector('.lista');
    const itenDeLista = tarefas.querySelectorAll('li');
    let colecaoDeTarefas = [];

    for(tarefa of itenDeLista){
      let text = tarefa.innerText;
      text = text.replace('APAGAR','').trim()
      colecaoDeTarefas.push(text)
    }
    const taskToJson = JSON.stringify(colecaoDeTarefas);
    localStorage.setItem('tarefas',taskToJson);

    //aqui e criado uma funcao que pega os valores inseridos na lista de tarefas os coloca num array
    //e depois os transforma numa string JSON para poder ser guardado no localStorage do navegador
    //e assim poder ter acesso a eles mesmo que o navegador seja fechado
}

function recolocarTarefas(){
    let tasks = localStorage.getItem('tarefas');
    let taskList = JSON.parse(tasks);

    for(tarefa of taskList){
        criarTarefa(tarefa);
    }

    //aqui as tarefas salvas sao recolocadas na lista
    //funcionando da mesma forma podendo remover ou adicionar novas
}recolocarTarefas();
