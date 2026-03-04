import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acerca-de',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acerca-de.html',
  styleUrls: ['./acerca-de.css']
})
export class AcercaDe {

  // Información del autor
  autor = {
    nombre: 'Mercedes Romero',
    email: 'mercedes.romero@example.com',
    github: 'https://github.com/mercedes-romero'
  };

  // Tecnologías utilizadas
  tecnologias = [
    { tipo: 'Frontend', herramientas: 'Angular 21, TypeScript, Bootstrap 5' },
    { tipo: 'Backend', herramientas: 'Node.js (opcional), XAMPP' },
    { tipo: 'Base de datos', herramientas: 'localStorage (simulación), MySQL opcional' },
    { tipo: 'Otras', herramientas: 'VS Code, Git, npm, Docker' }
  ];

  // Directivas usadas
  directivas = [
    { nombre: '@if', tipo: 'Control de flujo', componente: 'header, eventos' },
    { nombre: '@for', tipo: 'Control de flujo', componente: 'eventos, home' },
    { nombre: '@switch', tipo: 'Control de flujo', componente: 'eventos' },
    { nombre: 'ngStyle', tipo: 'Atributo', componente: 'eventos' },
    { nombre: 'ngClass', tipo: 'Atributo', componente: 'eventos, evento-card' },
    { nombre: '@input', tipo: 'Propiedad', componente: 'evento-card' },
    { nombre: '@output', tipo: 'Evento', componente: 'evento-card' }
  ];

  // Usuarios de prueba
  usuarios = [
    { username: 'admin', password: '1234' },
    { username: 'user', password: '1234' }
  ];

  // Bibliografía
  bibliografia = [
    'Apuntes de clase',
    'Documentación oficial Angular: https://angular.io',
    'Bootstrap 5: https://getbootstrap.com'
  ];

}