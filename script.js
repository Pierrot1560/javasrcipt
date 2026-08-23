
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


function createTodoCard(text) {
    const card = createElementHelper('div', 'todo-card');
    const checkBtn = createElementHelper('button', 'btn-check', '✓');
    const textBox = createElementHelper('div', 'todo-text-box', text);
    const rightBlock = createElementHelper('div', 'card-right');
    const deleteBtn = createElementHelper('button', 'btn-delete-single', 'X');
    const dateBadge = createElementHelper('div', 'date-badge');

    const now = new Date();
    dateBadge.textContent = now.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });

    rightBlock.appendChild(deleteBtn);
    rightBlock.appendChild(dateBadge);

    card.appendChild(checkBtn);
    card.appendChild(textBox);
    card.appendChild(rightBlock);

    return card;
}

todoListContainer.addEventListener('click', function(event) {
   
    const card = event.target.closest('.todo-card');
    if (!card) return;

    if (event.target.classList.contains('btn-check')) {
        const textBox = card.querySelector('.todo-text-box');
        textBox.classList.toggle('done');
        event.target.classList.toggle('completed');
    }

    
    if (event.target.classList.contains('btn-delete-single')) {
        todoListContainer.removeChild(card);
    }
});

addBtn.addEventListener('click', function() {
    const text = inputField.value.trim();

    if (text !== '') {
        const newCard = createTodoCard(text);
        todoListContainer.appendChild(newCard);
        inputField.value = ''; 
    }
});

deleteAllBtn.addEventListener('click', function() {
    todoListContainer.innerHTML = '';
});

// todoListContainer.appendChild(createTodoCard('Todo text'));
// todoListContainer.appendChild(createTodoCard('Todo text'));