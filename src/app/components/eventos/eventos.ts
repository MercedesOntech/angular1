import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventoService, Evento } from '../../services/eventos';
import { MayusculasPipe } from '../../pipes/mayusculas-pipe';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, MayusculasPipe],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.css']
})
export class Eventoss implements OnInit {
  eventos: Evento[] = [];

  constructor(private eventoService: EventoService, private router: Router) {}

  ngOnInit(): void {
    this.eventos = this.eventoService.getEventos();
  }

  eliminar(index: number){
    const confirmar = confirm("¿Seguro que quieres eliminar este evento?");
    if(confirmar){
      this.eventoService.eliminarEvento(index);
      this.eventos = this.eventoService.getEventos();
    }
  }

  editarEvento(evento: Evento) {
    this.router.navigate(['/actualizar-evento'], { state: { eventoEdit: evento } });
  }
}