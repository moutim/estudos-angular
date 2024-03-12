import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos.service';
import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
  declarations: [
    CursosComponent,
    CursosDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
    // RouterModule
  ],
  exports: [
    CursosComponent,
    CursosDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  providers: [CursosService]
})
export class CursosModule { }
