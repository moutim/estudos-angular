import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { CursosDetalheComponent } from './cursos/cursos-detalhe/cursos-detalhe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:id', component: CursosDetalheComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
