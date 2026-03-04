import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Eventoss } from './components/eventos/eventos';
import { CrearEvento } from './components/crear-evento/crear-evento';
import { AcercaDe } from './components/acerca-de/acerca-de';
import { Login } from './components/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'eventos', component: Eventoss },
  { path: 'crear', component: CrearEvento },
  { path: 'acerca-de', component: AcercaDe },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '' }
];