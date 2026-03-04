import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html'
})
export class Login {
  formLogin: FormGroup;
  enviado = false;
  error = '';

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.enviado = true;
    if (this.formLogin.valid) {
      const { username, password } = this.formLogin.value;
      if (this.auth.login(username, password)) {
        this.router.navigate(['/home']);
      } else {
        this.error = 'Usuario o contraseña incorrectos';
      }
    }
  }
}