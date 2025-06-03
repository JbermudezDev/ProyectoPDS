import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  modo: 'login' | 'registro' = 'login';

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
    // Aquí va el llamado al servicio para login
    console.log('Login con:', this.loginData);
  }

  registrar() {
    // Aquí va el llamado al servicio para registrar
    console.log('Registro con:', this.registroData);
  }
}
