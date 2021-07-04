// kumpulkan semua ui elemnt
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const filterInput = document.querySelector('#filter-input');
const todoList = document.querySelector('#todo-list');
const clearButton = document.querySelector('#clear-todos');


// ini adalah kumpulan event listener
immediateLoadEventListener();
function immediateLoadEventListener(){
// mengambil todos dari localstorage dan render dibrowser
document.addEventListener("DOMContentLoaded", getTodos);

// ini adalah event untuk menambahkan todo
    todoForm.addEventListener('submit', addTodo);
    // ini adalah event untuk menghapus1 todo
    todoList.addEventListener('click', deleteTodo);
    // mengahpus semua todo
    clearButton.addEventListener('click',clearTodo);
    // filter todo
    filterInput.addEventListener('keyup', filterTodos);
}


// reusable codes
function createTodoElement(value){
    const li = document.createElement('li');
        // menambahkan class
        li.className = "todo-item list-group-item d-flex justify-content-between align-items-center mb-1"
        // menambahkan child
        li.appendChild(document.createTextNode(value));    
        // membuat delete button
        const a = document.createElement('a');
        a.className = "badge badge-danger delete-todo";
        a.href = "#";
        a.innerHTML = "Delete";
        // memasukkan elemen a ke elemen li
        li.appendChild(a);
    
        // memasukkan elemen li ke elemen todolist
        todoList.appendChild(li);
}

function getItemFromLocalStorage(){
    let todos;

     if (localStorage.getItem("todos") == null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}




// ini adalah dom function

function getTodos(){
   const todos = getItemFromLocalStorage();
    todos.forEach((todo)=>{
       
          createTodoElement(todo);
    
})

}


function addTodo(e){
    e.preventDefault();

    if (todoInput.value){
        createTodoElement(todoInput.value);
        addTodoLocalStorage(todoInput.value);
        todoInput.value = ""
        // console.log(todoList)
    } else {
        alert('masukkan todo');
    }
}

function deleteTodo(e){
    e.preventDefault();

    if (e.target.classList.contains("delete-todo")){
        if (confirm("apakah ingin menghapus list ini ?")){
            const parent = e.target.parentElement;
            parent.remove();
            deleteTodoLocalStorage(parent);

        }
    }
    // console.log(e.target)
}

function deleteTodoLocalStorage(deletedelement){
    const todos = getItemFromLocalStorage(); //akan mengahapus parent todo 4
    todos.forEach((todo,index)=>{
        if (deletedelement.firstChild.textContent == todo){
            todos.splice(index, 1)
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));

}

function clearTodo(){
    todoList.innerHTML = ""
    localStorage.clear()
}

function filterTodos(e){
    const filterText = e.target.value.toLowerCase();
    const todoItem = document.querySelectorAll('.todo-item');
    todoItem.forEach((item) =>{
        const itemText = item.firstChild.textContent.toLowerCase()
        if (itemText.indexOf(filterText) !== -1){
            item.setAttribute('style',"display:block;");
        } 
        else {
            item.setAttribute('style', "display:none !important");
            
        }
        console.log(itemText)
    })
}

function addTodoLocalStorage(todoInputValue){
    const todos = getItemFromLocalStorage();
    // console.log(todos)
    todos.push(todoInputValue)
    localStorage.setItem("todos", JSON.stringify(todos)); 
    // console.log(localStorage.getItem("todos"))
}

