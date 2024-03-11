import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrl: './cursos-detalhe.component.css'
})
export class CursosDetalheComponent {
  id: string = '';
  inscricao: Subscription | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }
}
