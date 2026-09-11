function getTodos(){
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=>{
        if(!response.ok){
            throw new Error (`Something went wrong: ${response.status}`)
        } 
        return response.json()
    })
    .catch(error=> {
        console.log('Error', error)
    })
}

// getTodos()

function printTodos(todosArray){
    if (!todosArray) return;

    const container = document.getElementById('todo-container');
    const ul = document.createElement('ul');

    todosArray.forEach(todo => {

    const li = document.createElement('li');

    li.innerHTML= `${todo.id} ${todo.title}`;

    ul.appendChild(li);
    }
);

    container.appendChild(ul);
}

    getTodos().then(data=>{
        printTodos(data);
    })