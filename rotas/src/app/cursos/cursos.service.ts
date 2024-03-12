import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [
      { id: 1, nome: "Angular" },
      { id: 2, nome: "Java" }
    ]
  }

  getCurso(id: number): string | null {
    const cursos = this.getCursos();

    const findCurso = cursos.filter(({ id: idCurso }) => id == idCurso);

    if (findCurso.length) return findCurso[0].nome;
    return null;
  }
}
