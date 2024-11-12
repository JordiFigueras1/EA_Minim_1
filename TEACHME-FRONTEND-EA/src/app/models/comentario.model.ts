// src/app/models/comentario.model.ts

import { Usuario } from './usuario.model';
import { Asignatura } from './asignatura.model';

export interface Comentario {
  _id?: string;
  contenido: string;
  autor: Usuario | string;
  comentarioPadre?: string;
  asignatura: string;
  respuestas?: Comentario[]; // Si quieres manejar respuestas como comentarios anidados
}
