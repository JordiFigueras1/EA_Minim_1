import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Comentario } from '../models/comentario.model';
import { Asignatura } from '../models/asignatura.model';
import { Usuario } from '../models/usuario.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ComentariosComponent implements OnInit {
  asignaturas: Asignatura[] = [];
  nuevoComentario: string = '';
  usuarioId: string = ''; // ID del usuario que comenta

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.cargarAsignaturasConComentarios();
  }

  cargarAsignaturasConComentarios(): void {
    this.apiService.getAsignaturasOrdenadasPorComentarios().subscribe(
      (data) => {
        this.asignaturas = data;
      },
      (error) => {
        console.error('Error al cargar asignaturas:', error);
      }
    );
  }

  agregarComentario(asignaturaId: string): void {
    if (this.nuevoComentario.trim()) {
      const comentario: Partial<Comentario> = {
        contenido: this.nuevoComentario,
        autor: this.usuarioId,
        asignatura: asignaturaId
      };

      this.apiService.crearComentario(comentario as Comentario).subscribe(
        () => {
          this.cargarAsignaturasConComentarios();
          this.nuevoComentario = '';
        },
        (error) => {
          console.error('Error al agregar comentario:', error);
        }
      );
    }
  }

  eliminarComentario(id: string): void {
    this.apiService.eliminarComentario(id).subscribe(
      () => this.cargarAsignaturasConComentarios(),
      (error) => console.error('Error al eliminar comentario:', error)
    );
  }

  getAutorNombre(autor: Usuario | string): string {
    return typeof autor === 'object' ? autor.nombre : autor;
  }
}
