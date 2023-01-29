const toDo = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input")
const TODOS_KEY = "todos"

let toDos = [];

function savetoDos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function handleToDoSubmit() {
    Event.preventDefault
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    savetoDos()
}

function deleteTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos()
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span")
    const button = document.createElement("button")
    button.innerText = "X";
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos){
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo)
}
