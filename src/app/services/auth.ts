import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private logueado = false;

  private usuarios = [
    { usuario: 'admin', password: '1234' },
    { usuario: 'mercedes', password: '1111' },
    { usuario: 'invitado', password: '0000' },
    { usuario: 'Mercedes', password: 'Mercedes_1365' }
  ];

  login(usuario: string, password: string): boolean {
    const existe = this.usuarios.find(
      u => u.usuario === usuario && u.password === password
    );

    if (existe) {
      this.logueado = true;
      return true;
    }

    return false;
  }

  logout() {
    this.logueado = false;
  }

  estaLogueado(): boolean {
    return this.logueado;
  }
}