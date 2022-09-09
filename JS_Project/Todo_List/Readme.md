# Proyecto TODO LIST


| Glosary |
| ------|
[ Proyecto Todo List]()
[ Agregando Elementos a nuestro listado]()


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
    refresh.preventDefault();// <<<<==== prevenimos que el navegador se refresque
    // vamos a input id = "todo"
    const todo = document.getElementById('todo');
    // Sacamos el valor de input id = "todo"
    const todoText = todo.value;
    // Cambiamos el valor de input id todo y lo remplazamos por un string vacio
    todo.value = '';
    console.log(todoText);
    }
}
```

Si abrimos inspeccionar y consola en el navegador podremos ver que estamos imprimiendo en consola los valores que escribimos, en el input y el boton enviar

### App
![image](https://user-images.githubusercontent.com/42829215/189218390-03c1f0b5-e063-486c-b68b-e4c85ab75496.png)
![image](https://user-images.githubusercontent.com/42829215/189219085-01b42414-8e58-4782-b1eb-7fd20cc81c3e.png)


### Consola
![image](https://user-images.githubusercontent.com/42829215/189218423-5fd9cd1c-c5bf-4319-93b3-6e69c20d80cc.png)
![image](https://user-images.githubusercontent.com/42829215/189219149-eb9115c6-fddb-4c5e-8eff-fdb6cfa58d10.png)

#  Agregando Elementos a nuestro listado

Es necesario tener una variable donde podamos contener los datos que queremos almacenar para ello podemos hacer uso del array, podemos crear un array al cual le podemos agregar elementos cada vez que escribimos una entrada y le damos enter o enviar, podemos hacer esto con el metodo ``.push`` el cual nos permite agregar elementos a un arreglo, pero tambien debemos crear una variable que contenga el ``getElementById('')`` deseado, con el fin de poder llamar al elemento html, posteriormente tambien debemos limpiar esta variable cada vez que se llama para evitar repeticiones, esto podemos hacerlo igualando la variable con el metodo ``<Variable>.innerHTML = '' ;`` esto lo que hara es regresarlo a un string vacio para evitar repetir un elemento guardado anteriormente.

## Ejemplo fracmento de codigo 

``` .js
// el array es global
// Creamos un arreglo al que se le iran agragando elementos
const todos = []; // array empty
    
    // esta parte va dentro de la funcion
    // .push nos permite agregar elementos al array
    todos.push(todoText);
    const todoList = document.getElementById('todo-list');
    // limpiamos el listado, evita repeticion de elementos 
    todoList.innerHTML = '';
```
Posteriormente necesitamos un buble para que nuestra funcion pueda repetir su ciclo y poder almacenar una cantidad de elementos ``i++``. Esto lo podemos hacer con un ``for`` el cual le demos la instruccion de que cada vez que se llame a la funcion sume una concatenacion de codigo HTML de tipo ``<Li> array[i] </li>`` para esto podemos ayudarnos con el metodo ``.innerHTML``.

## Ejemplo de Fragmento de codigo 
```.js
// va dentro de la funcion juste despues de limpiar el string todo-list
for (let i = 0; i < todos.length; i++ ){
        // usamos += para sumar una concatenacion de lista cada vez con la iteracion [i]
        todoList.innerHTML += '<li>' + todos[i] + '</li>';
    }
```
## Codigo Integrado 
```.js
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
    for (let i = 0; i < todos.length; i++ ){
        // usamos += para sumar una concatenacion de lista cada vez con la iteracion [i]
        todoList.innerHTML += '<li>' + todos[i] + '</li>';
    }
    console.log(todoText);
    }
}
```
### Pruebas de app 
Ahora la app recibe datos que al enviarlos los acomoda en forma de lista unordered.

![image](https://user-images.githubusercontent.com/42829215/189254699-50b28570-fa66-4cde-953d-acf25989f221.png)
![image](https://user-images.githubusercontent.com/42829215/189254738-4f7441e1-ae5f-476d-9073-df84fb77e222.png)
