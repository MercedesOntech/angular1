// src/app/services/evento.service.ts
import { Injectable } from '@angular/core';

export interface Evento {
  titulo: string;
  descripcion: string;
  fecha: string;
  lugar: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private eventos: Evento[] = [];

  getEventos(): Evento[] {
    return this.eventos;
  }

  agregarEvento(evento: Evento) {
    this.eventos.push(evento);
  }

  eliminarEvento(index: number) {
    this.eventos.splice(index, 1);
  }

  // ← NUEVO MÉTODO
  actualizarEvento(eventoAntiguo: Evento, eventoNuevo: Evento) {
    const index = this.eventos.findIndex(e => 
      e.titulo === eventoAntiguo.titulo &&
      e.fecha === eventoAntiguo.fecha &&
      e.lugar === eventoAntiguo.lugar
    );
    if (index !== -1) {
      this.eventos[index] = eventoNuevo;
    }
  }
}