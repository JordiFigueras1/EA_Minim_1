// src/models/comentario.ts
import mongoose from 'mongoose';

const comentarioSchema = new mongoose.Schema({
  contenido: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  asignatura: { type: mongoose.Schema.Types.ObjectId, ref: 'Asignatura', required: true }, // Relación con Asignatura
  comentarioPadre: { type: mongoose.Schema.Types.ObjectId, ref: 'Comentario', default: null },
  fechaCreacion: { type: Date, default: Date.now }
}, { versionKey: false });

const Comentario = mongoose.model('Comentario', comentarioSchema);
export default Comentario;
