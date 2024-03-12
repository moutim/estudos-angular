import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import IAlunos from '../interfaces/IAlunos';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.css'
})
export class AlunoDetalheComponent {
  id: number = 0;
  inscricao: Subscription | undefined;
  aluno: IAlunos | undefined;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
  ) {
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.aluno = this.alunosService.getAlunoById(this.id);
    })
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }
}
