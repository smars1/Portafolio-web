# Proyecto TODO LIST


| Glosary |
| ------|
[ Proyecto Todo List](https://github.com/smars1/Portafolio-web/tree/main/JS_Project/Todo_List#proyecto-todo-list)
[ Agregando Elementos a nuestro listado](https://github.com/smars1/Portafolio-web/tree/main/JS_Project/Todo_List#agregando-elementos-a-nuestro-listado)
[ Simplificando operaciones de array con .map](https://github.com/smars1/Portafolio-web/tree/main/JS_Project/Todo_List#simplificando-operaciones-de-array-con-map)
[Agregando eventos al hacer click en elementos](https://github.com/smars1/Portafolio-web/tree/main/JS_Project/Todo_List#agregando-eventos-al-hacer-click-en-elementos)
[Persistencia de datos](https://github.com/smars1/Portafolio-web/edit/main/JS_Project/Todo_List/Readme.md#persistencias-de-datos)

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


# Simplificando operaciones de array con .map

El metodo ``.map`` nos permite iterar nuestros arreglos sin necesidad de que nosostros le vayamos indicando los indices o las operaciones que tengamos que realizar. Esto nos permitira poder simplificar todo el bucle ``for`` por una sola linea de codigo y poder hacer lo mismo

Estructura de ``.map``
```.js
const todosTemplate = todos.map(t => {
return <li> + t +</li>;
})
```
Lo que hace nuestra funcion ``todos.map``  es hacer que ``t`` retorne un elemento tipo``<li></li>``


tambien podemos simplificarlo a una sola linea ejemplo:
```.js
const todosTemplate = todos.map(t => <li> + t +</li>;)
```
Podemos ver la funcion como, a todos los elementos ``t`` concatenalos al principio y al final con ``<li>`` y ``</li>``

## Simplificando el for con el metodo ``.map`` 
Si recordamos en la seccion de agregar elementos a nuestro listado lo hacemos con un ``for``, esto funciona bien pero podemos hacer lo mismo de una manera mas optima limpia y simplificada con el metodo .map. a continuacion se mostraran dos plantillas de codigo una utliza ``for`` y otra ``.map`` con el fin de apreciar las diferencias.

### For
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
### .map
```.js
const todoTemplate = todos.map(t => '<li>' + t + '</li>');
```
Como no podemos colocar un Array dentro de nuestro HTML deberemos hacer uso de la funcion ``join()`` y darle la isntruccion de que nos guarde todos los elementos de nuestro arreglo en un ``string`` vacio .

```.js
const todoTemplate = todos.map(t => '<li>' + t + '</li>');
todosList.innerHTML = todosTemplate.join(''); 
```
``todoList`` es la variable que hace referencia al id tag que se esta manejando.

## Codigo de la app Simplificado 

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
    
    //metodo .map
    const todoTemplate = todos.map(t => '<li>' + t + '</li>');
    // Damos la instrucion de guardar los elementos del array en un  string vacio
    todoList.innerHTML = todoTemplate.join('');
   
    
    // El for queda remplazado por el uso del metodo .map para este caso puesto nos permite un codigo mas limpio y corto
    
    // for (let i = 0; i < todos.length; i++ ){
    //     // usamos += para sumar una concatenacion de lista cada vez con la iteracion [i]
    //     todoList.innerHTML += '<li>' + todos[i] + '</li>';
    // }
    // console.log(todoText);
     
    }
}
```

# Agregando eventos al hacer click en elementos

| Glosary |
|---------|
[Agregando instruccion eliminara nuestra funcion](https://github.com/smars1/Portafolio-web/blob/main/JS_Project/Todo_List/Readme.md#agregando-instruccion-eliminar-a-nuestra-funcion)
[Creando nuestra funcion render](https://github.com/smars1/Portafolio-web/blob/main/JS_Project/Todo_List/Readme.md#creando-nuestra-funcion-render)



Si queremos agregar eventos a nuestros elementos de ``todo-list`` deberemos crear primero una funcion que nos permita agregar e imprimir los elementos de un array al listado para HTML y hacer uso del metodo ``.addEventListener`` podemos ayudarnos creando una funcion foreach a la cual le podemos dar como parametros el elemento y el numero de posicion de dicho elemento en el array.

Estructura:
```.js
// Seleccionamos todos lo elementos de todo-list que sean li
    const elementos = document.querySelectorAll('#todo-list li');
    // iteramos con la funcion de forEach 
    elementos.forEach((elementos, i) => {
        // Agregramos un escuchador de evento con el metodo .addEventListener 
            elementos.addEventListener('click', () => {
                 console.log(elementos, i);
            });
```     

## Agregando instruccion eliminar a nuestra funcion

Al metodo ``.addEventListener`` le podemos dar como parametros el tipo de evento en este caso es cuando hacemos click en el elemento y como segundo parametro le damos una funcion que imprime el elemento y su numero de posicion en consola.

Lo primero que debemos agregar la instruccion de eleminar dentro de nuestra funcion de ``.addEventListerner()`` la cual es nuestra funcion de escucha.

Los nodos padres tiene la capasidad de eleminar a sus hijos y esto se puede hacer con la instruccion  .parentNode.removeChild(<Arg>);   ``.parentNode`` lo que hara sera transformar lo que tenemos a el tag de HMTL en este caso es para un tag ``<ul></ul>`` mientras que ``.removeChild`` remueve dicho elemento. 

```.js
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
            });
```

## Creando nuestra funcion render

Al nosotros estar eliminando los elemtos de html y luego eliminandolos en nuestro arreglo de todos, el problema que teniamos era que los indices de los elementos de nuestro html no estaban siendo actualizados con respecto a nuestros arreglos estos se encontraban fuera de sincronia, y para sincronizarlos lo hacemos es que debemos renderizarlos nuevamente a nuestra aplicacion, para ello volvemos a llamar a la mismas funcion render que hemos creado, esto tambien se conoce como recursividad que es cuando una funcion se llama a si misma, en este caso es con el fin de que en cada cambio se vuelva a renderizar toda la app, para que esta quede en sincronia cada vez que se realize un cambio.

Debemos renderizar todos los elementos que se encuentren dentro del forEach con el fin de que todos los elementos sean actualizados y nuestro arreglo pueda actualizar su estado cada vez que nosotros realizemos un cambio. 

### Codigo actualizado
```.js
// Creamos un arreglo al que se le iran agragando elementos
const todos = []; // array empty

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
            });
        });
}

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

    // Ejecutamos render
    render();
    }
}
```

# Persistencias de datos 

Para poder hacer que nuestros datos queden guardados en nuestro navegador web podemos utilizar ``localStorage`` pero deberemos seguir teniendo la estructura de nuestro array en el cual se va agregando los elementos, pero ahora de manera de ``json``. Podemos pasar todo lo recibido a json con la funcion ``JSON.parse()`` y hacer un corto circuito en caso de que llamemos un elemento que no se encuentra

Estructura del array 

```.js
+// Creamos un arreglo al que se le iran agragando elementos, si  no se eencuetra, se utilza un arreglo vacio
const todos =JSON.parse(localStorage.getItem('todos')) || []; // array empty
```

``localStorage.getItem('todos')`` manda a llamar lo que se encuentra dentro del array  ``todos`` el cual queda guardado en el navegador web gracias a ``localStorage``.

## Convirtiendo formato json

Creamos la funcion para convertir los datos en un string con formato JSON con la funcion ``JSON.stringify()``

```.js
const actualizaTodos = (todos) => {
    // convertimos a string
    const todoStrings = JSON.stringify(todos);
    // guardamos dentro setItem lo que tendremos en localStorage
    localStorage.setItem('todos', todoStrings);
}
```

## Codigo modificado

```.js
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
```
