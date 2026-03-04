import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Eventos, Evento } from '../../services/eventos';

@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEvento {

  eventoForm: FormGroup;
  tiposEvento = ['Concierto', 'Conferencia', 'Taller', 'Otro'];
  enviado = false;

  constructor(private fb: FormBuilder, private eventosService: Eventos) {
    this.eventoForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['', Validators.required],
      fecha: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(0)]],
      importante: [false],
      descripcion: ['']
    });
  }

  guardarEvento() {
    this.enviado = true;
    if (this.eventoForm.valid) {
      const evento: Evento = this.eventoForm.value;
      this.eventosService.addEvento(evento);
      alert('Evento guardado correctamente ✅');
      this.eventoForm.reset({ precio: 0, importante: false });
      this.enviado = false;
    }
  }

  get f() {
    return this.eventoForm.controls;
  }
}