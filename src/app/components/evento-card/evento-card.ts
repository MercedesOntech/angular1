// src/app/components/evento-card/evento-card.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Evento } from '../../models/evento.model';
import { MayusculasPipe } from '../../pipes/mayusculas-pipe';

@Component({
  selector: 'app-evento-card',
  standalone: true,
  imports: [CommonModule, MayusculasPipe],
  templateUrl: './evento-card.html',
  styleUrls: ['./evento-card.css']
})
export class EventoCard {
  @Input() evento!: Evento;
}