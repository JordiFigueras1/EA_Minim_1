Me ha tocado el Ejercicio tipo 4 de los comentarios.

He hecho que los comentarios tengan un autor con un ObjectId de la colección de Usuarios de mi proyecto.
He hecho que los comentarios sean o pertenezcan a la colección de Asignaturas existente en mi proyecto, utilizando también su ObjectId.

El backend me funciona perfectamente.

En la parte de backoffice llamo a las asignaturas ordenadas por su número de comentarios y me funciona elminar los comentarios, pero la funcion crear
comentario me da error a la hora de coger el id del autor y no me permite Crear correctamente el comentario, pero 
las funciones leer asignaturas ordenadas por comentarios con sus comentarios y eliminar funcionan.

Explicación de cada ruta
POST /api/comentarios/ - Crea un nuevo comentario.

Body: { contenido, autor, asignatura, comentarioPadre (opcional) }
GET /api/comentarios/ - Lista todos los comentarios.

Puedes agregar filtros en el controlador si necesitas filtrar comentarios de una asignatura o usuario específico.
GET /api/comentarios/:comentarioId - Obtiene un comentario específico por su ID.

Parametro: comentarioId (ID del comentario que deseas obtener)
PUT /api/comentarios/:comentarioId - Actualiza el contenido de un comentario específico.

Parametro: comentarioId (ID del comentario a actualizar)
Body: { contenido } (nuevo contenido para el comentario)
DELETE /api/comentarios/:comentarioId - Elimina un comentario específico por su ID.

Parametro: comentarioId (ID del comentario a eliminar)
GET /api/comentarios/asignaturas/ordenadas-por-comentarios - Obtiene una lista de asignaturas ordenadas por el número de comentarios.

Esta ruta devuelve las asignaturas con un campo adicional totalComentarios que indica la cantidad de comentarios en cada asignatura.
