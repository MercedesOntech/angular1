import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() eventoEdit?: Evento;  // <-- Recibe un evento para editar
  @Output() eventoGuardado = new EventEmitter<Evento>(); // <-- Notifica al padre

  titulo = '';
  descripcion = '';
  fecha = '';
  lugar = '';
  precio!: number;
  enviado = false;

  constructor(private eventoService: EventoService, private router: Router) {}

  ngOnInit(): void {
    if (this.eventoEdit) {
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
        this.eventoService.actualizarEvento(this.eventoEdit, nuevoEvento);
      } else {
        this.eventoService.agregarEvento(nuevoEvento);
      }

      // **Aquí lanzamos el evento para avisar al padre**
      this.eventoGuardado.emit(nuevoEvento);

      form.resetForm();
      this.router.navigate(['/eventos']);
    }
  }
}