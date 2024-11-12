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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarAsignaturasPorComentarios = exports.eliminarComentario = exports.actualizarComentario = exports.listarComentarios = exports.obtenerComentarioPorId = exports.crearComentario = void 0;
const comentarioService = __importStar(require("../services/comentarioService"));
const comentario_1 = __importDefault(require("../models/comentario")); // Asegúrate de que la ruta es correcta
// Crear comentario
const crearComentario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contenido, autor, asignatura, comentarioPadre } = req.body; // Incluye asignatura aquí
        const comentario = yield comentarioService.crearComentario(contenido, autor, asignatura, comentarioPadre);
        res.status(201).json(comentario);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.crearComentario = crearComentario;
// Obtener comentario por ID
const obtenerComentarioPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comentario = yield comentarioService.obtenerComentarioPorId(req.params.comentarioId);
        res.status(200).json(comentario);
    }
    catch (error) {
        res.status(404).json({ error: 'Comentario no encontrado' });
    }
});
exports.obtenerComentarioPorId = obtenerComentarioPorId;
// Listar comentarios
const listarComentarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { comentarioPadre } = req.query;
        const comentarios = yield comentarioService.listarComentarios(comentarioPadre);
        res.status(200).json(comentarios);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.listarComentarios = listarComentarios;
// Actualizar comentario
const actualizarComentario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contenido } = req.body;
        const comentario = yield comentarioService.actualizarComentario(req.params.comentarioId, contenido);
        res.status(200).json(comentario);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.actualizarComentario = actualizarComentario;
// Eliminar comentario
const eliminarComentario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comentario = yield comentarioService.eliminarComentario(req.params.comentarioId);
        res.status(200).json({ message: 'Comentario eliminado', comentario });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.eliminarComentario = eliminarComentario;
// Obtener asignaturas ordenadas por número de comentarios
const listarAsignaturasPorComentarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const asignaturasConConteo = yield comentario_1.default.aggregate([
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
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.listarAsignaturasPorComentarios = listarAsignaturasPorComentarios;
//# sourceMappingURL=comentarioController.js.map