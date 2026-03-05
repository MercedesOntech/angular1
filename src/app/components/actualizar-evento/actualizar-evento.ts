// src/app/components/actualizar-evento/actualizar-evento.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventoService, Evento } from '../../services/eventos';

@Component({
  selector: 'app-actualizar-evento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizar-evento.html',
  styleUrls: ['./actualizar-evento.css']
})
export class ActualizarEvento implements OnInit {

  eventoEdit!: Evento;  // evento a editar

  titulo = '';
  descripcion = '';
  fecha = '';
  lugar = '';
  precio!: number;

  constructor(private router: Router, private eventoService: EventoService) {}

  ngOnInit(): void {
    const state = history.state;
    if (state && state.eventoEdit) {
      this.eventoEdit = state.eventoEdit;  // ← evento que vamos a actualizar
      this.titulo = this.eventoEdit.titulo;
      this.descripcion = this.eventoEdit.descripcion;
      this.fecha = this.eventoEdit.fecha;
      this.lugar = this.eventoEdit.lugar;
      this.precio = this.eventoEdit.precio;
    } else {
      // si no hay evento, volvemos a la lista
      this.router.navigate(['/eventos']);
    }
  }

  guardar(form: NgForm) {
    if (form.valid) {
      const nuevoEvento: Evento = {
        titulo: this.titulo,
        descripcion: this.descripcion,
        fecha: this.fecha,
        lugar: this.lugar,
        precio: this.precio
      };

      this.eventoService.actualizarEvento(this.eventoEdit, nuevoEvento);
      this.router.navigate(['/eventoss']);
    }
  }
}