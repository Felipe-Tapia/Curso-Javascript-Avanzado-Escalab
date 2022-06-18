# Curso-Javascript-Avanzado
 Trabajos presentados en curso de Javascript Avanzado en Escalab
----------------------------------------------------------------------------------------------------------------------------------------------
#Trabajo 1: Sorteo

Requerimiento Funcional:

- Debe tener un arreglo que contenga opciones de lo que queramos sortear.

- Se debe obtener un primer valor al azar de ese arreglo, que será mostrado al usuario.

- El usuario dispondrá de tres “tiros” (no es necesaria una interfaz gráfica en HTML) con los cuales obtendrá tres objetos al azar del arreglo.

- Si uno de los objetos obtenidos coincide con el primero, se concluye el juego dando al usuario como ganador.

- Si no hay coincidencias en los tres intentos, se termina el juego dando al usuario como perdedor.

----------------------------------------------------------------------------------------------------------------------------------------------

#Trabajo 2: Pokeapi

Requerimiento Funcional:

- Como usuario, quiero ingresar a un sistema que me permita obtener información del pokémon que desee, considerando que los pokemones son 898 y van de Bulbasaur a Calyrex.

- Como usuario, quiero que al ingresar el nombre y/o ID del pokémon en un formulario HTML, mediante un input de texto, se muestre su nombre, descripción, categoría (ej: Pókemon Ratón), altura, peso y tipos (ej: Eléctrico), acompañado de una imágen de referencia del pokémon en cuestión.

- Como usuario, quiero que se me avise en caso de que mi búsqueda no arrojase resultados (no por consola!).

- Como usuario, quiero que se guarde mi historial de búsquedas de pokémon en caso de querer acceder nuevamente. Esto debe persistir a los cierres del navegador.

----------------------------------------------------------------------------------------------------------------------------------------------

#Trabajo 3: Conectandose a una API OAuth

Requerimiento Funcional:

- Mostrar una cadena de texto por consola que concatene el token_type y el access_token con un espacio al medio.

----------------------------------------------------------------------------------------------------------------------------------------------

#Trabajo 4: Aplicación de pedidos para un café

Requerimiento Funcional:

- El backend de esta aplicación ya está programado, debemos desarrollar sólo el front.
- El acceso a ciertas partes de la aplicación debe estar protegido por usuario y contraseña
- Deben existir tres tipos de usuarios: guest, user y admin
- - El guest es un usuario sin acceder. Sólo puede ver el menú.
- - El user puede hacer lo mismo que guest, además de tomar pedidos e ingresarlos
- - El admin puede hacer lo mismo que el user, además de ver los user y admin registrados
- La aplicación frontend se compone de las siguientes vistas:
- - Página de inicio: Menú de productos y sus valores. Contiene un formulario de ingreso por usuario y contraseña
- - Toma de pedidos: Listado de productos donde podemos señalar la cantidad que el cliente desea de cada uno. Al final del listado indica el precio total que se actualiza cada vez que agregamos o quitamos un producto.
- - Vista de usuarios: Listado de usuarios tipo user y admin. Se muestra fotografía, nombre y rol.
