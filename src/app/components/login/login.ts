// src/app/components/login/login.ts
import { Component } from '@angular/core';
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

  constructor(private auth: Auth, private router: Router) {}

  login() {
    const correcto = this.auth.login(this.usuario, this.password);

    if (correcto) {
      this.router.navigate(['/']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}