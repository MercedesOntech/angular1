// src/app/components/login/login.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  usuario: string = '';
  password: string = '';
  error: string = '';

  @Output() logueado = new EventEmitter<string>(); // opcional para notificar al padre

  constructor(private auth: Auth, private router: Router) {}

  login() {
    const correcto = this.auth.login(this.usuario, this.password);

    if (correcto) {
      this.logueado.emit(this.usuario); // notifica al padre si quieres
      this.router.navigate(['/']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}