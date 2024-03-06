import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  // @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa() {
    this.valor+= 1;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.valor-= 1;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
