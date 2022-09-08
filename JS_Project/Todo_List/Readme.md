# Proyecto TODO LIST

Este proyecto trata sobre una pequeña aplicacion que mantenga  persistencia de datos, donde podamos escribir un texto y este se guarde al oprimir un boton enviar, 
en forma de una lista unordered (no ordenada)


De lo primero que nos debremos preocupar, es el poder capturar el evento de cuando nuestro formulario se esta enviando, podemos hacer uso de la funcion ``getElementById`` y dentro de esta asignarle un remplazo. Tambien debemos prevenir el evento de resfrecar la pagina al oprimer enviar con ``.preventDefault();``

## Estructura 
```.js
// window.onload permite que cargue el html antes que el JS
window.onload = () => {
// Creamos form el cual llamada al elemento form por su ID
const form = document.getElementById('todo-form');
form.onsubmit = (refresh) => {
    // los submit tienen como determinado resfresh eso lo podemos cambiar con la siguiente funcion
    refresh.preventDefault(); // prevenimos que el navegador se refresque
    const todo = document.getElementById('todo');
    const todoText = todo.value;
    todo.value = '';
    console.log(todoText);
    }
}
```

Si abrimos inspeccionar y consola en el navegador podremos ver que estamos imprimiendo en consola los valores que escribimos, en el input y el boton enviar

### App
![image](https://user-images.githubusercontent.com/42829215/189218390-03c1f0b5-e063-486c-b68b-e4c85ab75496.png)
### Consola
![image](https://user-images.githubusercontent.com/42829215/189218423-5fd9cd1c-c5bf-4319-93b3-6e69c20d80cc.png)
