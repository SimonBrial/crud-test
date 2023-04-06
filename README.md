
**Pautas para el desarrollo de la aplicacion:**

**CONDICIONES DE DISEÑO:**

    **HERRAMIENTAS A USAR:**
        - React: Entorno de desarrollo de la aplicacion.
        - React hook form: Para el manejo de la informacion del formulario.
        - Material UI: Libreria para el diseño de la UI.
        - React router dom: Para el enrrutamiento de la APP.
        - Axios: Para el consumo de la API de JSON PLACEHOLDER. 
    **ESPECIFICACIONES DE LA APP:**
        - Al iniciar la app se debe mostrar una lista de post paginados en una tabla.
        - Cada post debe tener un boton de eliminar.
        - Se deben crear los formularios respectivos para PUBLICAR (create) y ACTUALIZAR (update).
        - Mostrar una notificación para cada operacion realizada.
    **PASOS PARA LA ELABORACION**
        - Se debe empezar por analizar la api, su endpoint y la informacion que me suministra en la respuesta. (DONE)
            - endpoint principal (GET): `https://jsonplaceholder.typicode.com/posts`
            - endpoint principal (POST): `https://jsonplaceholder.typicode.com/posts`
            - endpoint para editar (PUT): `https://jsonplaceholder.typicode.com/posts/${id}`
            - endpoint para eliminar (DELETE): `https://jsonplaceholder.typicode.com/posts/${id}`
            - La cantidad de post en total es de 100!!!
        - Crear parte de la interfaz, como por ejemplo: 'Header'. (DONE)
        - Agregar la estructura basica de la tabla para poder mostrar los post traidos de la api. (DONE)
        - Crear el formulario para la edicion o creacioin de los registro traidos por la API.
    
