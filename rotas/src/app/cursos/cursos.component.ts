import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursos: any[] = [];
  pagina: number = 1;
  inscricao: Subscription | undefined;

  constructor(
    private cursoService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();

    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina']
    });
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }

  proximaPagina() {
    this.router.navigate(['/cursos'], { queryParams: { pagina: ++this.pagina }});
  }
}
