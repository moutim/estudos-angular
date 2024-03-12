import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private alunos: any[] = [
    { id: 1, nome: 'Vitor', email: 'vitor@gmail.com' },
    { id: 2, nome: 'Hugo', email: 'hugo@gmail.com' },
    { id: 3, nome: 'Moutim', email: 'moutim@gmail.com' }
  ];

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAlunoById(id: number) {
    const alunos = this.getAlunos();

    const filterAluno = alunos.filter(({ id: idAluno }) => idAluno == id);

    if (filterAluno.length) return filterAluno[0];
    return null;
  }
}
