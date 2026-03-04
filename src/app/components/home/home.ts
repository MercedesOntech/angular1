// src/app/components/home/home.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  // Lista de imágenes para el home
  imagenes = [
    'assets/images/banner.jpg',
    'assets/images/concierto.jpg',
    'assets/images/conferencia.jpg'
  ];
}