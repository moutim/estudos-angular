import { Component } from '@angular/core';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  listPokemons: Object = {};

  constructor(private pokedexService: PokedexService) {
  }

  getListPokemon() {
    this.pokedexService.getPokemon().subscribe({
      next: (result: Object) => {
        console.log(result);

      }
    })
  }
}
