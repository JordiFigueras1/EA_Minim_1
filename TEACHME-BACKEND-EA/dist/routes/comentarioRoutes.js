"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/comentarioRoutes.ts
const express = __importStar(require("express"));
const comentarioController_1 = require("../controller/comentarioController");
const router = express.Router();
router.post('/', comentarioController_1.crearComentario);
router.get('/', comentarioController_1.listarComentarios);
router.get('/:comentarioId', comentarioController_1.obtenerComentarioPorId);
router.put('/:comentarioId', comentarioController_1.actualizarComentario);
router.delete('/:comentarioId', comentarioController_1.eliminarComentario);
// Ruta para listar asignaturas ordenadas por número de comentarios
router.get('/asignaturas/ordenadas-por-comentarios', comentarioController_1.listarAsignaturasPorComentarios);
exports.default = router;
//# sourceMappingURL=comentarioRoutes.js.map