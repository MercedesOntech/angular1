// src/app/services/eventos.service.ts
import { Injectable } from '@angular/core';

export interface Evento {
  titulo: string;
  fecha: string;
  lugar: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private eventos: Evento[] = [];

  agregarEvento(evento: Evento) {
    this.eventos.push(evento);
    localStorage.setItem('eventos', JSON.stringify(this.eventos));
  }

  obtenerEventos(): Evento[] {
    const guardados = localStorage.getItem('eventos');
    if (guardados) this.eventos = JSON.parse(guardados);
    return this.eventos;
  }
}