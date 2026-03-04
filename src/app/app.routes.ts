import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { CrearEvento } from './components/crear-evento/crear-evento';
import { Eventoss } from './components/eventos/eventos';
import { AcercaDe } from './components/acerca-de/acerca-de';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: '', component: Home },
  { path: 'crear', component: CrearEvento },
  { path: 'eventoss', component: Eventoss },
  { path: 'acerca-de', component: AcercaDe }
];