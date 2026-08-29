export function createElementHelper(tagName, className = '', textContent = '') {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}


export function createTodoCard({ id, text, isChecked, date }) {
    const card = createElementHelper('div', 'todo-card');
    card.dataset.id = id; 

    const checkBtn = createElementHelper('input', 'btn-check');
    checkBtn.type = 'checkbox';
    checkBtn.checked = isChecked; 
    
    const textBox = createElementHelper('div', 'todo-text-box');
    textBox.textContent = text; 
    
    if (isChecked) {
        textBox.classList.add('done');
    }

    const rightBlock = createElementHelper('div', 'card-right');
    const deleteBtn = createElementHelper('button', 'btn-delete-single', 'X');
    const dateBadge = createElementHelper('div', 'date-badge');
    dateBadge.textContent = date; 

    rightBlock.appendChild(deleteBtn);
    rightBlock.appendChild(dateBadge);

    card.appendChild(checkBtn);
    card.appendChild(textBox);
    card.appendChild(rightBlock);

    return card;
}