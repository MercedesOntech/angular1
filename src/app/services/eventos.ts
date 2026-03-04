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
}