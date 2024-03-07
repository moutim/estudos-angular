import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private getPokemonURL: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private readonly http: HttpClient) { }

  getPokemon() {
    return this.http.get(this.getPokemonURL);
  }
}
