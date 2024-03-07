import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursos: string[] = ["Java", "Angular", "C#"];

  constructor() { }

  getCursos() {
    return this.cursos;
  }

  onAddCurso(curso: string) {
    this.cursos.push(curso);
  }
}
