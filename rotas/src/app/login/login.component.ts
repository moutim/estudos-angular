import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import IUsuario from './interfaces/IUsuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: IUsuario = {
    email: '',
    senha: ''
  };

  constructor(private authService: AuthService) {
  }

  entrar() {
    this.authService.fazerLogin(this.usuario);
  }
}
