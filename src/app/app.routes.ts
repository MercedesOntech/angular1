import { Home } from './components/home/home';
import { CrearEvento } from './components/crear-evento/crear-evento';
import { Login } from './components/login/login';

export const routes = [
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'crear', component: CrearEvento },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];