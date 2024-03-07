import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
