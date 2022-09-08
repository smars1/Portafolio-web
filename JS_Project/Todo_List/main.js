// window.onload permite que cargue el html antes que el JS
window.onload = () => {
// Creamos form el cual llamada al elemento form por su ID
const form = document.getElementById('todo-form');
form.onsubmit = (refresh) => {
    // los submit tienen como determinado resfresh eso lo podemos cambiar con la siguiente funcion
    refresh.preventDefault();
    const todo = document.getElementById('todo');
    const todoText = todo.value;
    todo.value = '';
    console.log(todoText);
    }
}