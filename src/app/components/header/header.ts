import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html'
})
export class Header {
  constructor(public auth: Auth) {}
}