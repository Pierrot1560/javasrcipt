
const root = document.getElementById('root');

function createElementHelper(tagName, className = '', textContent = '') {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}


function setData(data) {
    
    const jsonString = JSON.stringify(data);
    localStorage.setItem('todos', jsonString);
}

function getData() {
    const data = localStorage.getItem('todos');
    
    if (data === null) {
        return []; //
    } else {
        return JSON.parse(data); 
    }
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


function createTodoCard(todo) {
    const card = createElementHelper('div', 'todo-card');
    
    card.setAttribute('data-id', todo.id);

    const checkBtn = createElementHelper('button', 'btn-check', '✓');
    const textBox = createElementHelper('div', 'todo-text-box', todo.text);
    const rightBlock = createElementHelper('div', 'card-right');
    const deleteBtn = createElementHelper('button', 'btn-delete-single', 'X');
    const dateBadge = createElementHelper('div', 'date-badge', todo.date);

    
    if (todo.isChecked === true) {
        textBox.classList.add('done');
        checkBtn.classList.add('completed');
    }

    rightBlock.appendChild(deleteBtn);
    rightBlock.appendChild(dateBadge);

    card.appendChild(checkBtn);
    card.appendChild(textBox);
    card.appendChild(rightBlock);

    return card;
}


function renderTodos() {
    todoListContainer.innerHTML = ''; 
    const todos = getData();          
    for (const todo of todos) {
        const card = createTodoCard(todo); 
        todoListContainer.appendChild(card); 
    }
}


todoListContainer.addEventListener('click', function(event) {
    const card = event.target.closest('.todo-card');
    if (!card) return; // Если кликнули мимо карточки — выходим

    
    const todoId = Number(card.getAttribute('data-id'));
    const todos = getData(); 

   
    if (event.target.classList.contains('btn-check')) {
        const textBox = card.querySelector('.todo-text-box');
        textBox.classList.toggle('done');
        event.target.classList.toggle('completed');


        for (const todo of todos) {
            if (todo.id === todoId) {
                todo.isChecked = !todo.isChecked; 
                break; 
            }
        }
        setData(todos); 
    }

    
    if (event.target.classList.contains('btn-delete-single')) {
        todoListContainer.removeChild(card); 

     
        const updatedTodos = [];
        for (const todo of todos) {
            if (todo.id !== todoId) {
                updatedTodos.push(todo); 
            }
        }
        setData(updatedTodos);
    }
});


addBtn.addEventListener('click', function() {
    const text = inputField.value.trim();

    if (text !== '') {
        const now = new Date();
        
      
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const day = now.getDate();
        
        
        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
        const monthName = months[now.getMonth()];

        const formattedDate = `${hours}:${minutes} ${day} ${monthName}`;


        const newTodo = {
            id: Date.now(), 
            date: formattedDate,
            text: text,
            isChecked: false
        };

        
        const todos = getData();
        todos.push(newTodo);
        setData(todos);

      
        const newCard = createTodoCard(newTodo);
        todoListContainer.appendChild(newCard);

       
    }
});


// deleteAllBtn.addEventListener('click', function() {
//     todoListContainer.innerHTML = ''; 
//     setData([]); 
// }); очистка всех задач (нужна ли ?)


renderTodos();