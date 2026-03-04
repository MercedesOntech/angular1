// src/app/services/auth.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface Usuario {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private usuarioLogueado: Usuario | null = null;

  constructor(private router: Router) {}

  // Registrar usuario
  registrar(usuario: Usuario) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  // Login
  login(username: string, password: string): boolean {
    const usuarios: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const user = usuarios.find(u => u.username === username && u.password === password);
    if (user) {
      this.usuarioLogueado = user;
      localStorage.setItem('usuarioLogueado', JSON.stringify(user));
      return true;
    }
    return false;
  }

  // Logout
  logout() {
    this.usuarioLogueado = null;
    localStorage.removeItem('usuarioLogueado');
    this.router.navigate(['/login']);
  }

  // Comprobar si hay sesión activa
  estaLogueado(): boolean {
    if (this.usuarioLogueado) return true;
    const user = localStorage.getItem('usuarioLogueado');
    if (user) {
      this.usuarioLogueado = JSON.parse(user);
      return true;
    }
    return false;
  }

  getUsuarioLogueado(): Usuario | null {
    return this.usuarioLogueado;
  }
}