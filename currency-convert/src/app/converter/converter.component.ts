import { Component } from '@angular/core';
import { ConverterService } from './converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
  currencies: string[] = ['teste'];

  constructor(private converterService: ConverterService) {
    this.getCurrencies();
  }

  getCurrencies() {
    this.converterService.getCurrencies().subscribe({
      next: (info: Object) => {
        const currencies = info as string[];
        console.log(info);

        this.currencies = currencies;
      }
    })
  }
}
