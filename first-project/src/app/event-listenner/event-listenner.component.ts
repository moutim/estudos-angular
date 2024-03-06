import { Component } from '@angular/core';

@Component({
  selector: 'app-event-listenner',
  templateUrl: './event-listenner.component.html',
  styleUrl: './event-listenner.component.css'
})
export class EventListennerComponent {
  valorAtual: string = '';
  valorSalvo: string = '';

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }
}
