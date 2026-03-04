import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-evento-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evento-card.html',
  styleUrls: ['./evento-card.css']
})
export class EventoCard {

  @Input() evento!: Evento; // recibe el evento
  @Output() borrar: EventEmitter<number> = new EventEmitter<number>(); // emite el id al borrar

  constructor() { }

  eliminarEvento() {
    if (confirm(`¿Seguro que quieres borrar el evento "${this.evento.titulo}"?`)) {
      this.borrar.emit(this.evento.id);
    }
  }

}