
const root = document.getElementById('root');

// Вспомогательная функция для быстрого создания элементов
function createElementHelper(tagName, className = '', textContent = '') {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

// Создание базовой структуры интерфейса
const mainPanel = createElementHelper('div', 'todo-panel');
const topBar = createElementHelper('div', 'top-bar');

const deleteAllBtn = createElementHelper('button', 'btn-cyan', 'Delete All');
const inputField = createElementHelper('input', 'input-field');
inputField.placeholder = 'Enter todo ...'; // placeholder добавляем отдельно, так как он специфичен для input

const addBtn = createElementHelper('button', 'btn-cyan', 'Add');

// Сборка панели управления
topBar.appendChild(deleteAllBtn);
topBar.appendChild(inputField);
topBar.appendChild(addBtn);

const todoListContainer = createElementHelper('div', 'todo-list');

mainPanel.appendChild(topBar);
mainPanel.appendChild(todoListContainer);
root.appendChild(mainPanel);

// Функция создания карточки задачи
function createTodoCard(text) {
    const card = createElementHelper('div', 'todo-card');
    const checkBtn = createElementHelper('button', 'btn-check', '✓');
    const textBox = createElementHelper('div', 'todo-text-box', text);
    const rightBlock = createElementHelper('div', 'card-right');
    const deleteBtn = createElementHelper('button', 'btn-delete-single', 'X');
    const dateBadge = createElementHelper('div', 'date-badge');

    const now = new Date();
    dateBadge.textContent = now.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });

    // Сборка правой части и всей карточки
    rightBlock.appendChild(deleteBtn);
    rightBlock.appendChild(dateBadge);

    card.appendChild(checkBtn);
    card.appendChild(textBox);
    card.appendChild(rightBlock);

    // Логика переключения состояния "выполнено" через addEventListener
    checkBtn.addEventListener('click', function() {
        textBox.classList.toggle('done');
        checkBtn.classList.toggle('completed');
    });

    // Логика удаления одной карточки через addEventListener
    deleteBtn.addEventListener('click', function() {
        todoListContainer.removeChild(card);
    });

    return card;
}

// Логика добавления новой задачи по кнопке "Add"
addBtn.addEventListener('click', function() {
    const text = inputField.value.trim();
    
    if (text !== '') {
        const newCard = createTodoCard(text);
        todoListContainer.appendChild(newCard);
        inputField.value = ''; 
    }
});

// Логика очистки всего списка по кнопке "Delete All"
deleteAllBtn.addEventListener('click', function() {
    todoListContainer.innerHTML = '';
});

// Добавление дефолтных карточек для проверки
todoListContainer.appendChild(createTodoCard('Todo text'));
todoListContainer.appendChild(createTodoCard('Todo text'));