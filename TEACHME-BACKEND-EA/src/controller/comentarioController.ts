// src/controller/comentarioController.ts
import { Request, Response } from 'express';
import * as comentarioService from '../services/comentarioService';
import Comentario from '../models/comentario'; // Asegúrate de que la ruta es correcta


// Crear comentario
export const crearComentario = async (req: Request, res: Response) => {
  try {
    const { contenido, autor, asignatura, comentarioPadre } = req.body;  // Incluye asignatura aquí
    const comentario = await comentarioService.crearComentario(contenido, autor, asignatura, comentarioPadre);
    res.status(201).json(comentario);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
// Obtener comentario por ID
export const obtenerComentarioPorId = async (req: Request, res: Response) => {
  try {
    const comentario = await comentarioService.obtenerComentarioPorId(req.params.comentarioId);
    res.status(200).json(comentario);
  } catch (error: any) {
    res.status(404).json({ error: 'Comentario no encontrado' });
  }
};

// Listar comentarios
export const listarComentarios = async (req: Request, res: Response) => {
  try {
    const { comentarioPadre } = req.query;
    const comentarios = await comentarioService.listarComentarios(comentarioPadre as string | null);
    res.status(200).json(comentarios);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar comentario
export const actualizarComentario = async (req: Request, res: Response) => {
  try {
    const { contenido } = req.body;
    const comentario = await comentarioService.actualizarComentario(req.params.comentarioId, contenido);
    res.status(200).json(comentario);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar comentario
export const eliminarComentario = async (req: Request, res: Response) => {
  try {
    const comentario = await comentarioService.eliminarComentario(req.params.comentarioId);
    res.status(200).json({ message: 'Comentario eliminado', comentario });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener asignaturas ordenadas por número de comentarios
export const listarAsignaturasPorComentarios = async (req: Request, res: Response) => {
  try {
    const asignaturasConConteo = await Comentario.aggregate([
      { $group: { _id: "$asignatura", totalComentarios: { $sum: 1 } } },
      { $sort: { totalComentarios: -1 } },
      {
        $lookup: {
          from: "asignaturas", // Nombre de la colección de asignaturas
          localField: "_id",
          foreignField: "_id",
          as: "asignaturaInfo"
        }
      },
      { $unwind: "$asignaturaInfo" },
      { $project: { _id: 0, asignatura: "$asignaturaInfo", totalComentarios: 1 } }
    ]);

    res.status(200).json(asignaturasConConteo);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
