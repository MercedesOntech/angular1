// src/app/components/crear-evento/crear-evento.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventosService, Evento } from '../../services/eventos';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './crear-evento.html',
  styleUrls: ['./crear-evento.css']
})
export class CrearEvento {
  formEvento: FormGroup;
  enviado = false;
  mensaje = '';

  constructor(private fb: FormBuilder, private eventosService: EventosService, private router: Router) {
    this.formEvento = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      lugar: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]]
    });
  }

  get f() {
    return this.formEvento.controls;
  }

  onSubmit() {
    this.enviado = true;
    if (this.formEvento.valid) {
      const nuevoEvento: Evento = this.formEvento.value;
      this.eventosService.agregarEvento(nuevoEvento);
      this.mensaje = 'Evento creado correctamente';
      this.formEvento.reset();
      this.enviado = false;
    }
  }
}