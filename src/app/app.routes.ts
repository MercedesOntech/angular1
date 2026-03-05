import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { CrearEvento } from './components/crear-evento/crear-evento';
import { Eventoss } from './components/eventos/eventos';
import { AcercaDe } from './components/acerca-de/acerca-de';
import { ActualizarEvento } from './components/actualizar-evento/actualizar-evento';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: '', component: Home },
  { path: 'crear', component: CrearEvento },
  { path: 'eventoss', component: Eventoss },
   { path: 'actualizar-evento', component: ActualizarEvento },
  { path: 'acerca-de', component: AcercaDe }
];