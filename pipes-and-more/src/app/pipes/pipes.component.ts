import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  livro: any = {
    titulo: 'JavaScript: O Guia Definitivo',
    rating: 4.8943,
    numeroPaginas: 1080,
    preco: 205.80,
    dataLancamento: new Date(2012, 1, 1),
    url: 'https://www.amazon.com.br/JavaScript-Guia-Definitivo-David-Flanagan/dp/856583719X'
  };

  livros: string[] = ['Java', 'Angular'];

  filtro: string = '';

  AdicionarCurso(curso: string) {
    this.livros.push(curso);
  }

  EncontrarCurso() {
    if (!this.livros.length || this.filtro == '' || this.filtro.trim() == '') {
      return this.livros;
    }

    return this.livros.filter((livro) => {
      if (livro.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0) return true;
      return false;
    })
  }
}
