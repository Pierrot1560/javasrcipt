
const root = document.getElementById('root');

function createElementHelper(tagName, className = '', textContent = '') {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

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



function setData(todosArray) {
    try {
        localStorage.setItem('todos', JSON.stringify(todosArray));
    } catch (error) {
        console.error('Ошибка', error);
    }
}

function getData() {
    try {
        const savedTodos = localStorage.getItem('todos');
        if (!savedTodos) {
            setData([]);
            return [];
        }
        return JSON.parse(savedTodos);
    } catch (error) {
        
        console.error('Ошибка', error);
        setData([]);
        return [];
    }
}

let todos = getData();



function createTodoCard(todoObj) {
    const card = createElementHelper('div', 'todo-card');
    card.dataset.id = todoObj.id; 

    const checkBtn = createElementHelper('input', 'btn-check');
    checkBtn.type = 'checkbox';
    checkBtn.checked = todoObj.isChecked; 
    
    const textBox = createElementHelper('div', 'todo-text-box');
    textBox.textContent = todoObj.text; 
    
    if (todoObj.isChecked) {
        textBox.classList.add('done');
    }

    const rightBlock = createElementHelper('div', 'card-right');
    const deleteBtn = createElementHelper('button', 'btn-delete-single', 'X');
    const dateBadge = createElementHelper('div', 'date-badge');
    dateBadge.textContent = todoObj.date; 

    rightBlock.appendChild(deleteBtn);
    rightBlock.appendChild(dateBadge);

    card.appendChild(checkBtn);
    card.appendChild(textBox);
    card.appendChild(rightBlock);

    return card;
}

function renderTodos() {
    todoListContainer.innerHTML = '';
    todos.forEach(todo => {
        const card = createTodoCard(todo);
        todoListContainer.appendChild(card);
    });
}



todoListContainer.addEventListener('change', function(event) {
    const card = event.target.closest('.todo-card');
    if (!card) return;

    if (event.target.classList.contains('btn-check')) {
        const textBox = card.querySelector('.todo-text-box');
        const todoId = Number(card.dataset.id);
        
        const currentTodo = todos.find(item => item.id === todoId);

        if (event.target.checked) {
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
    const card = event.target.closest('.todo-card');
    if (!card) return;

    if (event.target.classList.contains('btn-delete-single')) {
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
            text: text,
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