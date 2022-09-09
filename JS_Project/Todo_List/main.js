// Creamos un arreglo al que se le iran agragando elementos
const todos = []; // array empty

// window.onload permite que cargue el html antes que el JS
window.onload = () => {
// Creamos form el cual llamada al elemento form por su ID
const form = document.getElementById('todo-form');
form.onsubmit = (refresh) => {
    // los submit tienen como determinado resfresh eso lo podemos cambiar con la siguiente funcion
    refresh.preventDefault();// prevenimos que el navegador se refresque
    // vamos a input id = "todo"
    const todo = document.getElementById('todo');
    // Sacamos el valor de input id = "todo"
    const todoText = todo.value;
    // Cambiamos el valor de input id todo y lo remplazamos por un string vacio
    todo.value = '';

    // .push nos permite agregar elementos al array
    todos.push(todoText);
    const todoList = document.getElementById('todo-list');
    // limpiamos el listado, evita repeticion de elementos 
    todoList.innerHTML = '';

    const todoTemplate = todos.map(t => '<li>' + t + '</li>');
    todoList.innerHTML = todoTemplate.join('');

    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((elementos, i) => {
            elementos.addEventListener('click', () => {
                console.log(elementos, i);
            });
        });
    }
}