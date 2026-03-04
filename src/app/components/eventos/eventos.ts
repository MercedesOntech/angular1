// src/app/components/eventos/eventos.ts
import { Component } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { EventoCard } from '../evento-card/evento-card';
import { EventosService, Evento } from '../../services/eventos';
import { MayusculasPipe } from '../../pipes/mayusculas-pipe';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, EventoCard, MayusculasPipe, DatePipe, CurrencyPipe],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.css']
})
export class Eventoss {
  eventos: Evento[] = [];

  constructor(private eventosService: EventosService) {
    this.eventos = this.eventosService.obtenerEventos();
  }
}