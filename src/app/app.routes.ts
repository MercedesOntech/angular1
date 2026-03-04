import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { CrearEvento } from './components/crear-evento/crear-evento';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: '', component: Home },
  { path: 'crear', component: CrearEvento },
  { path: '**', redirectTo: '', pathMatch: 'full' as const }
];