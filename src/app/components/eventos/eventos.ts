import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Eventos, Evento } from '../../services/eventos';
import { EventoCard } from '../evento-card/evento-card';
import { MayusculasPipe } from '../../pipes/mayusculas-pipe';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, EventoCard, MayusculasPipe, DatePipe, CurrencyPipe],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.css']
})
export class Eventoss implements OnInit {

  eventos: Evento[] = [];

  constructor(private eventosService: Eventos) {}

  ngOnInit() {
    this.cargarEventos();
  }

  cargarEventos() {
    this.eventos = this.eventosService.getEventos();
  }

  eliminarEvento(id: number) {
    this.eventosService.deleteEvento(id);
    this.cargarEventos();
  }

}