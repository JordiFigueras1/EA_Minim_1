"use strict";
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
exports.eliminarComentario = exports.actualizarComentario = exports.listarComentarios = exports.obtenerComentarioPorId = exports.crearComentario = void 0;
// src/services/comentarioService.ts
const comentario_1 = __importDefault(require("../models/comentario"));
const mongoose_1 = __importDefault(require("mongoose"));
// Crear comentario
const crearComentario = (contenido_1, autor_1, asignatura_1, ...args_1) => __awaiter(void 0, [contenido_1, autor_1, asignatura_1, ...args_1], void 0, function* (contenido, autor, asignatura, comentarioPadre = null) {
    const comentario = new comentario_1.default({
        contenido,
        autor,
        asignatura,
        comentarioPadre,
    });
    return yield comentario.save();
});
exports.crearComentario = crearComentario;
// Obtener un comentario por ID
const obtenerComentarioPorId = (comentarioId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield comentario_1.default.findById(comentarioId).populate('autor').populate('comentarioPadre');
});
exports.obtenerComentarioPorId = obtenerComentarioPorId;
// Listar todos los comentarios (o filtrar por comentario padre si se desea)
const listarComentarios = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (comentarioPadre = null) {
    const filter = comentarioPadre ? { comentarioPadre: new mongoose_1.default.Types.ObjectId(comentarioPadre) } : {};
    return yield comentario_1.default.find(filter).populate('autor').populate('comentarioPadre');
});
exports.listarComentarios = listarComentarios;
// Actualizar comentario
const actualizarComentario = (comentarioId, contenido) => __awaiter(void 0, void 0, void 0, function* () {
    return yield comentario_1.default.findByIdAndUpdate(comentarioId, { contenido }, { new: true });
});
exports.actualizarComentario = actualizarComentario;
// Eliminar comentario
const eliminarComentario = (comentarioId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield comentario_1.default.findByIdAndDelete(comentarioId);
});
exports.eliminarComentario = eliminarComentario;
//# sourceMappingURL=comentarioService.js.map