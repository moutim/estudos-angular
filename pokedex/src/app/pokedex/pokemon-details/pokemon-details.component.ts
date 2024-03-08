import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() baseExperience: string = '';
  @Input() type: string = '';
  @Input() image: string = '';
}
