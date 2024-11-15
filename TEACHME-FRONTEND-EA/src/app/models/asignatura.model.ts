import { Comentario } from './comentario.model'; // Importa Comentario aquí


export interface Asignatura {
  _id: string;           // ID único de la asignatura, generado por el backend
  nombre: string;        // Nombre de la asignatura
  descripcion: string;   // Descripción de la asignatura
  usuarios?: string[];   // IDs de usuarios asociados a la asignatura (opcional)
  comentarios?: Comentario[]; // Añadir esta propiedad para los comentarios

}
