function adicionaTarefaNaLista() {
    // debugger - descomentar para acompanhar o fluxo da pagina
    // seleciona o elemento de input text que tem o texto da nova tarefa
    const novaTarefa = document.getElementById('input_nova_tarefa').value
    criaNovoItemDaLista(novaTarefa)
}

function criaNovoItemDaLista(textoDaTarefa) {
    // recupera a lista de tarefas
    const listaTarefas = document.getElementById('lista_de_tarefas')
    // guarda o tamanho da lista de tarefas
    let qtdTarefas = listaTarefas.children.length

    // cria um novo elemento do tipo li (lista)
    const novoItem = document.createElement('li')

    // adiciona o texto digitado no texto da tarefa
    novoItem.innerText = textoDaTarefa
    // adiciona um ID no novo elemento
    novoItem.id = `tarefa_id_${qtdTarefas++}`

    novoItem.appendChild(criaInputCheckBox(novoItem.id))

    listaTarefas.appendChild(novoItem)
}

function criaInputCheckBox(idTarefa) {
    const inputTarefa = document.createElement('input');
    inputTarefa.type = 'checkbox';
    inputTarefa.setAttribute('onclick', `mudaEstadoTarefa('${idTarefa}')`);
    return inputTarefa;
}

function criaInputBotaoAtualizar(idTarefa) {
    const buttonUpdate = document.createElement('button');
    buttonUpdate.setAttribute('onclick', `atualizarTarefa('${idTarefa}')`);
    return buttonUpdate;
}

function atualizarTarefa(idTarefa) {
    let tarefa = document.getElementById(idTarefa);
    let newText = prompt("Qual a sua tarefa?:", tarefa.innerText);
    tarefa.innerText = newText;
    tarefa.appendChild(criaInputCheckBox(idTarefa))
    tarefa.appendChild(criaInputBotaoAtualizar(idTarefa))
}

var tarefaEscondida = false;

function mudaEstadoTarefa(idTarefa) {
    const tarefaSelecionada = document.getElementById(idTarefa);

    if (tarefaSelecionada.style.textDecoration == 'line-through')
        tarefaSelecionada.style = 'text-decoration: none;';

    else {
        tarefaSelecionada.style = 'text-decoration: line-through;';

        if (tarefaEscondida == true)
            tarefaSelecionada.style.display = 'none';
    }
}

function esconderTarefa() {
    console.log("tarefaEscondida:", tarefaEscondida)
    tarefaEscondida = !tarefaEscondida;

    if (tarefaEscondida === true) {
        let listaTarefas = document.getElementById('lista_de_tarefas');
        for (let index = 0; index < listaTarefas.children.length; index++) {
            let tarefa = document.getElementById(`tarefa_id_${index}`);

            if (tarefa.style.textDecoration === 'line-through')
                tarefa.style.display = 'none';
        }
    }
}