const addInput = document.getElementById("input-text");
const todoButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(event) {
    event.preventDefault();
    //Another useless comment
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = addInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check-square"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);
    const deletedButton = document.createElement('button');
    deletedButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deletedButton.classList.add('deleted-btn');
    todoDiv.appendChild(deletedButton);
    todoList.appendChild(todoDiv);
    addInput.value = '';
}

function deleteCheck(e) {
    const item = e.target;
    //in case of delete button clicked
    if (item.classList[0] === 'deleted-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });
    }

    //in case of checked button clicked
    if (item.classList[0] === 'completed-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}