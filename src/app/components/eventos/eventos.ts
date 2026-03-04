// src/app/components/eventos/eventos.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoService, Evento } from '../../services/eventos';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.css']
})
export class Eventoss implements OnInit {
  eventos: Evento[] = [];

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.eventos = this.eventoService.getEventos();
  }

  eliminar(index: number){
    const confirmar = confirm("¿Seguro que quieres elimar este evento?");

    if(confirmar){
      this.eventoService.eliminarEvento(index);
    }
  }
}