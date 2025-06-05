import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  modo: 'login' | 'registro' = 'login';

  constructor(private authService: AuthService) {}

  loginData = {
    email: '',
    password: ''
  };

  registroData = {
    nombre: '',
    email: '',
    password: ''
  };

  login() {
    this.authService.login(this.loginData.email, this.loginData.password).subscribe({
      next: response => {
        console.log('Login exitoso:', response);
      },
      error: error => {
        console.error('Error al hacer login:', error);
      }
    });
  }

  registrar() {
    this.authService.register(this.registroData.nombre, this.registroData.email, this.registroData.password).subscribe({
      next: response => {
        console.log('Registro exitoso:', response);
      },
      error: error => {
        console.error('Error al registrar:', error);
      }
    });
  }
}
