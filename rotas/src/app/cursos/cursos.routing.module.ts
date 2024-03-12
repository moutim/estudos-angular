import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from '../cursos/cursos.component';
import { CursosDetalheComponent } from '../cursos/cursos-detalhe/cursos-detalhe.component';
import { CursoNaoEncontradoComponent } from '../cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:id', component: CursosDetalheComponent },
  { path: 'nao-encontrado', component: CursoNaoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
