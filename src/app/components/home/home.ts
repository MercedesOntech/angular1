import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
})
export class Home {
  constructor(public auth: Auth, private router: Router) {
    if (!this.auth.estaLogueado()) {
      this.router.navigate(['/login']);
    }
  }

  imagenes: string[] = [
    'assets/images/banner.jpg',
    'assets/images/concierto.jpg',
    'assets/images/conferencia.jpg'
  ];
}