// Obter lista de tarefas do localStorage ou inicializá-la como um array vazio
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

const inputTarefa = document.getElementById('taskInput');
const listaTarefas = document.getElementById('listaTarefas');
const checkboxOcultarConcluidas = document.getElementById('ocultarConcluidas');

// Função para renderizar tarefas
function renderizarTarefas() {
  listaTarefas.innerHTML = '';
  tarefas.forEach((tarefa, index) => {
    if (!tarefa.concluida || !checkboxOcultarConcluidas.checked) {
      const li = document.createElement('li');
      li.textContent = tarefa.nome;
      if (tarefa.concluida) {
        li.classList.add('concluida');
      }
      li.addEventListener('click', () => alternarTarefa(index));
      listaTarefas.appendChild(li);
    }
  });
}

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
  const nomeTarefa = inputTarefa.value.trim();
  if (nomeTarefa !== '') {
    tarefas.push({ nome: nomeTarefa, concluida: false });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    renderizarTarefas();
    inputTarefa.value = '';
  }
}

// Função para alternar o status de conclusão da tarefa
function alternarTarefa(index) {
  tarefas[index].concluida = !tarefas[index].concluida;
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
  renderizarTarefas();
}

// Função para alternar ocultar tarefas concluídas
function alternarOcultarConcluidas() {
  renderizarTarefas();
}

// Renderizar tarefas quando a página carregar
renderizarTarefas();
