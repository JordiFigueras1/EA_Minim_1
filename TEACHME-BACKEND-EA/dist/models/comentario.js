"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/comentario.ts
const mongoose_1 = __importDefault(require("mongoose"));
const comentarioSchema = new mongoose_1.default.Schema({
    contenido: { type: String, required: true },
    autor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    asignatura: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Asignatura', required: true }, // Relación con Asignatura
    comentarioPadre: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Comentario', default: null },
    fechaCreacion: { type: Date, default: Date.now }
}, { versionKey: false });
const Comentario = mongoose_1.default.model('Comentario', comentarioSchema);
exports.default = Comentario;
//# sourceMappingURL=comentario.js.map