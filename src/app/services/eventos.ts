import { Injectable } from '@angular/core';

export interface Evento {
  id: number;
  titulo: string;
  tipo: string;
  fecha: string; // ISO string
  precio: number;
  importante?: boolean; // opcional, para ngClass / ngStyle
}

@Injectable({
  providedIn: 'root'
})
export class Eventos {

  private storageKey = 'eventos';
  private eventos: Evento[] = [];

  constructor() {
    // Cargar eventos desde localStorage si existen
    const datos = localStorage.getItem(this.storageKey);
    if (datos) {
      this.eventos = JSON.parse(datos);
    }
  }

  // Devuelve copia de eventos
  getEventos(): Evento[] {
    return [...this.eventos];
  }

  // Añadir evento
  addEvento(evento: Evento) {
    evento.id = this.eventos.length > 0 ? this.eventos[this.eventos.length - 1].id + 1 : 1;
    this.eventos.push(evento);
    this.guardar();
  }

  // Eliminar evento por id
  deleteEvento(id: number) {
    this.eventos = this.eventos.filter(e => e.id !== id);
    this.guardar();
  }

  // Guardar en localStorage
  private guardar() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.eventos));
  }
}