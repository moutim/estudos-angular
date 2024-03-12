import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from '../cursos/cursos.component';
import { CursosDetalheComponent } from '../cursos/cursos-detalhe/cursos-detalhe.component';
import { CursoNaoEncontradoComponent } from '../cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';

const routes: Routes = [
  { path: 'alunos', component: AlunosComponent },
  { path: 'alunos/novo', component: AlunoFormularioComponent },
  { path: 'alunos/:id', component: AlunoDetalheComponent },
  { path: 'alunos/:id/editar', component: AlunoFormularioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
