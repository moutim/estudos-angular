import { Component } from '@angular/core';
import { PokedexService } from './pokedex.service';
import IListPokemon from '../interfaces/IListPokemon';
import ISpecsPokemon from '../interfaces/ISpecsPokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  listPokemons: IListPokemon | undefined;

  listSpecsPokemons: ISpecsPokemon[] | undefined = [];

  constructor(private pokedexService: PokedexService) {
  }

  ngOnInit() {
    this.getListPokemon();

    this.getSpecsPokemons();
  }

  getListPokemon() {
    this.pokedexService.getPokemon().subscribe({
      next: (result: Object) => {
        const list = result as IListPokemon;
        this.listPokemons = list;
      }
    })
  }

  getSpecsPokemons() {
    this.listPokemons?.results.forEach(({ name }, index) => {

      this.pokedexService.getPokemonByName(name).subscribe({
        next: (result: any) => {
          const specs: ISpecsPokemon = {
            id: index + 1,
            name: result.name,
            baseExperience: result.base_experience,
            image: result.sprites.other.dream_world.front_default,
            type: result.types[0].type.name
          };
          console.log(result);

          this.listSpecsPokemons?.push(specs);

        }
      });

    });
  }
}
