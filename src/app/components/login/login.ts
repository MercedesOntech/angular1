import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  loginForm: FormGroup;
  enviado = false;
  error = '';

  constructor(private fb: FormBuilder, private authService: Auth, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.enviado = true;
    this.error = '';
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      const exito = this.authService.login(username, password);
      if (exito) {
        this.router.navigate(['/']);
      } else {
        this.error = 'Usuario o contraseña incorrectos';
      }
    }
  }

}