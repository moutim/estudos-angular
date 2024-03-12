import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrl: './cursos-detalhe.component.css'
})
export class CursosDetalheComponent {
  id: number = 0;
  inscricao: Subscription | undefined;
  curso: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.curso = this.cursosService.getCurso(this.id);

      if (this.curso == null) {
        this.router.navigate(['/nao-encontrado'])
      }
    });
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }
}
