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
  listSpecsPokemons: ISpecsPokemon[] = [];
  nextPage: string = '';
  searchName: string = '';

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.getListPokemon();

    this.getSpecsPokemons();
  }

  getListPokemon() {
    this.pokedexService.getPokemon().subscribe({
      next: (result: IListPokemon) => {
        this.nextPage = result.next;
        this.listPokemons = result;
      }
    });
  }

  getSpecsPokemons() {
    this.listPokemons?.results.forEach(({ name }, index) => {

      this.pokedexService.getPokemonByName(name).subscribe({
        next: (result: any) => {
          const specs: ISpecsPokemon = {
            id: this.listSpecsPokemons.length + 1,
            name: result.name,
            baseExperience: result.base_experience,
            image: result.sprites.other.dream_world.front_default,
            type: result.types[0].type.name
          };
          this.listSpecsPokemons?.push(specs);
        }
      });

    });
  }

  searchPokemonByName(name: string) {
    if (name == '') {
      // this.listPokemons = undefined;
      // this.listSpecsPokemons = [];
      this.getListPokemon();
      this.getSpecsPokemons();
      return;
    }

    this.listSpecsPokemons = [];

    this.pokedexService.getPokemonByName(name).subscribe({
      next: (result: any) => {
        const specs: ISpecsPokemon = {
          id: 1,
          name: result.name,
          baseExperience: result.base_experience,
          image: result.sprites.other.dream_world.front_default,
          type: result.types[0].type.name
        };
        this.listSpecsPokemons?.push(specs);
      }, error: () => {
        console.log('deu erro')
      }
    });
  }

  loadPokemons() {
    this.pokedexService.getNextPagePokemons(this.nextPage).subscribe({
      next: (result: Object) => {
        const list = result as IListPokemon;
        this.listPokemons = list;
        this.nextPage = list.next;
        this.getSpecsPokemons();
      }
    });
  }
}
