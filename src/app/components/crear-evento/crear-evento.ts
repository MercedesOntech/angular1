// src/app/components/crear-evento/crear-evento.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EventoService, Evento } from '../../services/eventos';

@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-evento.html',
  styleUrls: ['./crear-evento.css']
})
export class CrearEvento {
  titulo = '';
  descripcion = '';
  fecha = '';
  lugar = '';
  precio!: number;
  enviado = false;

  constructor(private eventoService: EventoService, private router: Router) {}

  guardar(form: NgForm) {
    this.enviado = true;
    if (form.valid) {
      const nuevoEvento: Evento = {
        titulo: this.titulo,
        descripcion: this.descripcion,
        fecha: this.fecha,
        lugar: this.lugar,
        precio: this.precio
      };
      this.eventoService.agregarEvento(nuevoEvento);
      form.resetForm();
      this.router.navigate(['/eventos']);
    }
  }
}