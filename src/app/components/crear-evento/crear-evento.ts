// src/app/components/crear-evento/crear-evento.ts
import { Component, Input } from '@angular/core';
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
  
  @Input() eventoEdit?: Evento;  // <-- @Input para recibir un evento

  titulo = '';
  descripcion = '';
  fecha = '';
  lugar = '';
  precio!: number;
  enviado = false;

  constructor(private eventoService: EventoService, private router: Router) {}

  ngOnInit(): void {
    if (this.eventoEdit) {
      // Si se pasa un evento, cargamos los datos en los campos
      this.titulo = this.eventoEdit.titulo;
      this.descripcion = this.eventoEdit.descripcion;
      this.fecha = this.eventoEdit.fecha;
      this.lugar = this.eventoEdit.lugar;
      this.precio = this.eventoEdit.precio;
    }
  }

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

      if (this.eventoEdit) {
        // Lógica si estamos editando: reemplazar evento en la lista
        this.eventoService.actualizarEvento(this.eventoEdit, nuevoEvento);
      } else {
        // Si es nuevo
        this.eventoService.agregarEvento(nuevoEvento);
      }

      form.resetForm();
      this.router.navigate(['/eventos']);
    }
  }
}