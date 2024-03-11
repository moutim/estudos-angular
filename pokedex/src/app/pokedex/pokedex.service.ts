import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IListPokemon from '../interfaces/IListPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private getPokemonURL: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private readonly http: HttpClient) { }

  getPokemon() {
    // Tipar o retorno do get resolve o problema de tipar o result no obersever no component
    return this.http.get<IListPokemon>(this.getPokemonURL + '?limit=10');
  }

  getPokemonByName(name: string) {
    return this.http.get(`${this.getPokemonURL}${name}`);
  }

  getNextPagePokemons(url: string) {
    return this.http.get(url);
  }
}
