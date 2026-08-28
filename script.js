
import { getData, setData } from './localStorage.js';
import { createElementHelper, createTodoCard } from './DOM.js';

const root = document.getElementById('root');

const mainPanel = createElementHelper('div', 'todo-panel');
const topBar = createElementHelper('div', 'top-bar');

const deleteAllBtn = createElementHelper('button', 'btn-cyan', 'Delete All');
const inputField = createElementHelper('input', 'input-field');
inputField.placeholder = 'Enter todo ...'; 

const addBtn = createElementHelper('button', 'btn-cyan', 'Add');

topBar.appendChild(deleteAllBtn);
topBar.appendChild(inputField);
topBar.appendChild(addBtn);

const todoListContainer = createElementHelper('div', 'todo-list');

mainPanel.appendChild(topBar);
mainPanel.appendChild(todoListContainer);
root.appendChild(mainPanel);


let todos = getData();

function renderTodos() {
    todoListContainer.innerHTML = '';
    todos.forEach(todo => {
        const card = createTodoCard(todo);
        todoListContainer.appendChild(card);
    });
}



todoListContainer.addEventListener('change', function(event) {
    const { target } = event; 
    const card = target.closest('.todo-card');
    if (!card) return;

    if (target.classList.contains('btn-check')) {
        const textBox = card.querySelector('.todo-text-box');
        const todoId = Number(card.dataset.id);
        
        const currentTodo = todos.find(item => item.id === todoId);

        if (target.checked) {
            textBox.classList.add('done');
            if (currentTodo) currentTodo.isChecked = true;
        } else {
            textBox.classList.remove('done');
            if (currentTodo) currentTodo.isChecked = false;
        }

        setData(todos);
    }
});

todoListContainer.addEventListener('click', function(event) {
    const { target } = event; 
    const card = target.closest('.todo-card');
    if (!card) return;

    if (target.classList.contains('btn-delete-single')) {
        const todoId = Number(card.dataset.id);
        
        todos = todos.filter(item => item.id !== todoId);
        
        setData(todos);
        todoListContainer.removeChild(card);
    }
});

addBtn.addEventListener('click', function() {
    const text = inputField.value.trim();

    if (text !== '') {
        const now = new Date();
        
        const formattedDate = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) + ' ' +
                              now.toLocaleDateString('en-US', { day: '2-digit', month: 'short' }).toLowerCase();

        const newTodo = {
            id: Date.now(), 
            date: formattedDate,
            text, 
            isChecked: false
        };

        todos.push(newTodo);
        setData(todos);
        
        const newCard = createTodoCard(newTodo);
        todoListContainer.appendChild(newCard);
        
        inputField.value = ''; 
    }
});

deleteAllBtn.addEventListener('click', function() {
    todos = []; 
    setData(todos); 
    todoListContainer.innerHTML = ''; 
});


renderTodos();