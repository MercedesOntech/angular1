import { Injectable } from '@angular/core';

export interface Usuario {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root' // servicio global singleton
})
export class Auth {

  private usuarios: Usuario[] = [
    { username: 'admin', password: '1234' },
    { username: 'user', password: '1234' }
  ];

  private storageKey = 'usuarioLogueado';

  constructor() {}

  // Login: devuelve true si usuario y contraseña correctos
  login(username: string, password: string): boolean {
    const user = this.usuarios.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem(this.storageKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  // Logout
  logout() {
    localStorage.removeItem(this.storageKey);
  }

  // Devuelve true si hay usuario logueado
  estaLogueado(): boolean {
    return localStorage.getItem(this.storageKey) !== null;
  }

  // Devuelve usuario logueado
  getUsuario(): Usuario | null {
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }
}