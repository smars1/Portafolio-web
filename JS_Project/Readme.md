# Proyecto TODO LIST

Este proyecto trata sobre una pequeña aplicacion que mantenga  persistencia de datos, donde podamos escribir un texto y este se guarde al oprimir un boton enviar, en forma de una lista unordered (no ordenada)

De lo primero que nos debremos preocupar, es el poder capturar el evento de cuando nuestro formulario se esta enviando, podemos hacer uso de la funcion ``getElementById`` y dentro de esta asignarle un remplazo. Tambien debemos prevenir el evento de resfrecar la pagina al oprimer enviar con ``.preventDefault();``

Si abrimos inspeccionar y consola en el navegador podremos ver que estamos imprimiendo en consola los valores que escribimos, en el input y el boton enviar
