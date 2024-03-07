import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';



@NgModule({
  declarations: [
    PokedexComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokedexComponent
  ]
})
export class PokedexModule { }
