import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoRoutingModule } from './aluno.routing.module';
import { AlunosService } from './alunos.service';



@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormularioComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    AlunoRoutingModule
  ],
  providers: [
    AlunosService
  ]
})
export class AlunosModule { }
