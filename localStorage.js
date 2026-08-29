export function setData(todosArray) {
    try {
        localStorage.setItem('todos', JSON.stringify(todosArray));
    } catch (error) {
        console.error('Ошибка', error);
    }
}

export function getData() {
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