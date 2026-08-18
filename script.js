
const root = document.getElementById('root');


const mainPanel = document.createElement('div');
mainPanel.className = 'todo-panel';

const topBar = document.createElement('div');
topBar.className = 'top-bar';

const deleteAllBtn = document.createElement('button');
deleteAllBtn.className = 'btn-cyan';
deleteAllBtn.innerText = 'Delete All';

const inputField = document.createElement('input');
inputField.className = 'input-field';
inputField.placeholder = 'Enter todo ...';

const addBtn = document.createElement('button');
addBtn.className = 'btn-cyan';
addBtn.innerText = 'Add';


topBar.appendChild(deleteAllBtn);
topBar.appendChild(inputField);
topBar.appendChild(addBtn);


const todoListContainer = document.createElement('div');
todoListContainer.className = 'todo-list';


mainPanel.appendChild(topBar);
mainPanel.appendChild(todoListContainer);
root.appendChild(mainPanel);


function createTodoCard(text) {

    const card = document.createElement('div');
    card.className = 'todo-card';

    const checkBtn = document.createElement('button');
    checkBtn.className = 'btn-check';
    checkBtn.innerText = '✓';

    const textBox = document.createElement('div');
    textBox.className = 'todo-text-box';
    textBox.innerText = text;

    const rightBlock = document.createElement('div');
    rightBlock.className = 'card-right';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete-single';
    deleteBtn.innerText = 'X';

    const dateBadge = document.createElement('div');
    dateBadge.className = 'date-badge';

    const now = new Date();
    dateBadge.innerText = now.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });

  
    rightBlock.appendChild(deleteBtn);
    rightBlock.appendChild(dateBadge);

    card.appendChild(checkBtn);
    card.appendChild(textBox);
    card.appendChild(rightBlock);


    checkBtn.onclick = function() {
        textBox.classList.toggle('done');
        checkBtn.classList.toggle('completed');
    };

    
    deleteBtn.onclick = function() {
        todoListContainer.removeChild(card);
    };

    return card;
}



addBtn.onclick = function() {
    const text = inputField.value.trim();
    
    if (text !== '') {
        const newCard = createTodoCard(text);
        todoListContainer.appendChild(newCard);
        inputField.value = ''; 
    }
};


deleteAllBtn.onclick = function() {
    todoListContainer.innerHTML = '';
};


todoListContainer.appendChild(createTodoCard('Todo text'));
todoListContainer.appendChild(createTodoCard('Todo text'));