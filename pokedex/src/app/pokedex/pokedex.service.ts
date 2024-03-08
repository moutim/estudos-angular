import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private getPokemonURL: string = 'https://pokeapi.co/api/v2/pokemon/?limit=10';

  constructor(private readonly http: HttpClient) { }

  getPokemon() {
    return this.http.get(this.getPokemonURL);
  }

  getPokemonByName(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
