import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.mostrarMenuEmiiter.subscribe(
      (status) => this.mostrarMenu = status
    );
  }

  title = 'rotas';
}
