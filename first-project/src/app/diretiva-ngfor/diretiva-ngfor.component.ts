import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrl: './diretiva-ngfor.component.css'
})
export class DiretivaNgforComponent {
  cursos: string[] = ["Angular", "TypeScript", "Materialize"];
}
