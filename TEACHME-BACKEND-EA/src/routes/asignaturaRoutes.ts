import * as express from 'express';
import {
    crearAsignatura,
    listarAsignaturas,
    verAsignaturaPorId,
    verAsignaturaPorNombre,
    eliminarAsignaturaPorId,
    eliminarAsignaturaPorNombre,
    asignarUsuariosAAsignaturaPorId,
    asignarUsuariosAAsignaturaPorNombre,
    obtenerAsignaturasPaginadas,
    obtenerAsignaturasConComentariosOrdenados // Asegúrate de importar esta función
} from '../controller/asignaturaController';

const router = express.Router();

////////////////////////////////////POSTS/////////////////////////////////////
router.post('/', crearAsignatura);

////////////////////////////////////GETS/////////////////////////////////////
// Coloca la ruta `comentarios-ordenados` antes de las rutas dinámicas
router.get('/comentarios-ordenados', obtenerAsignaturasConComentariosOrdenados);
router.get('/paginacion', obtenerAsignaturasPaginadas);
router.get('/', listarAsignaturas);
router.get('/:_id', verAsignaturaPorId);
router.get('/:nombre', verAsignaturaPorNombre);

////////////////////////////////////PUTS/////////////////////////////////////
router.put('/:nombre/usuario', asignarUsuariosAAsignaturaPorNombre);
router.put('/:_id/usuario', asignarUsuariosAAsignaturaPorId);

////////////////////////////////////DELETES/////////////////////////////////////
router.delete('/:_id', eliminarAsignaturaPorId);
router.delete('/:nombre', eliminarAsignaturaPorNombre);

export default router;
