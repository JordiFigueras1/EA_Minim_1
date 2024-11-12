// src/services/comentarioService.ts
import Comentario from '../models/comentario';
import mongoose from 'mongoose';

// Crear comentario
export const crearComentario = async (contenido: string, autor: string, asignatura: string, comentarioPadre: string | null = null) => {
  const comentario = new Comentario({
    contenido,
    autor,
    asignatura, 
    comentarioPadre,
  });
  return await comentario.save();
};

// Obtener un comentario por ID
export const obtenerComentarioPorId = async (comentarioId: string) => {
  return await Comentario.findById(comentarioId).populate('autor').populate('comentarioPadre');
};

// Listar todos los comentarios (o filtrar por comentario padre si se desea)
export const listarComentarios = async (comentarioPadre: string | null = null) => {
  const filter = comentarioPadre ? { comentarioPadre: new mongoose.Types.ObjectId(comentarioPadre) } : {};
  return await Comentario.find(filter).populate('autor').populate('comentarioPadre');
};

// Actualizar comentario
export const actualizarComentario = async (comentarioId: string, contenido: string) => {
  return await Comentario.findByIdAndUpdate(comentarioId, { contenido }, { new: true });
};

// Eliminar comentario
export const eliminarComentario = async (comentarioId: string) => {
  return await Comentario.findByIdAndDelete(comentarioId);
};
