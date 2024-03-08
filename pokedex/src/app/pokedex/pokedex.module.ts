import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokedexService } from './pokedex.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PokedexComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PokedexComponent
  ],
  providers: [
    PokedexService
  ]
})
export class PokedexModule { }
