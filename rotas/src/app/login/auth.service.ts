import { EventEmitter, Injectable } from '@angular/core';
import IUsuario from './interfaces/IUsuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmiiter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: IUsuario) {
    if (usuario.email == 'moutim@gmail.com' && usuario.senha == '12345') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmiiter.emit(true);
      this.router.navigate(['/']);
    } else {
    this.usuarioAutenticado = false;
    this.mostrarMenuEmiiter.emit(false);
  }
  }
}
