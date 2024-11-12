// src/routes/comentarioRoutes.ts
import * as express from 'express';
import {
  crearComentario,
  obtenerComentarioPorId,
  listarComentarios,
  actualizarComentario,
  eliminarComentario,
  listarAsignaturasPorComentarios
} from '../controller/comentarioController';

const router = express.Router();

router.post('/', crearComentario);
router.get('/', listarComentarios);
router.get('/:comentarioId', obtenerComentarioPorId);
router.put('/:comentarioId', actualizarComentario);
router.delete('/:comentarioId', eliminarComentario);

// Ruta para listar asignaturas ordenadas por número de comentarios
router.get('/asignaturas/ordenadas-por-comentarios', listarAsignaturasPorComentarios);
export default router;
