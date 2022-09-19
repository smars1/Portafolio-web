// Creamos un arreglo al que se le iran agragando elementos, si  no se eencuetra, se utilza un arreglo vacio
const todos =JSON.parse(localStorage.getItem('todos')) || []; // array empty

// Creamos funcion render
const render = () => {
    const todoList = document.getElementById('todo-list');
    // limpiamos el listado, evita repeticion de elementos 
    todoList.innerHTML = '';

    const todoTemplate = todos.map(t => '<li>' + t + '</li>');
    todoList.innerHTML = todoTemplate.join('');

    // Seleccionamos todos lo elementos de todo-list que sean li
    const elementos = document.querySelectorAll('#todo-list li');
    // iteramos con la funcion de forEach 
    elementos.forEach((elementos, i) => {
        // Agregramos un escuchador de evento con el metodo .addEventListener 
            elementos.addEventListener('click', () => {
                // removemos un nodo hijo de uno padre
                elementos.parentNode.removeChild(elementos);
                //indicamos el indice del elemento a eliminar de del array (limpiamos el array)
                todos.splice(i, 1); 
                actualizaTodos(todos);
                render();

            });
        });
}

const actualizaTodos = (todos) => {
    // convertimos a string
    const todoStrings = JSON.stringify(todos);
    // guardamos dentro setItem lo que tendremos en localStorage
    localStorage.setItem('todos', todoStrings);
}

// window.onload permite que cargue el html antes que el JS
window.onload = () => {
    render();
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
    actualizaTodos(todos);
    // Ejecutamos render
    render();
    }
}