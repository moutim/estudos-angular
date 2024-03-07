import { Component } from '@angular/core';
import { ConverterService } from './converter.service';

type convertedObject = {
  amount: number;
  base: string;
  date: string;
  rates: Object;
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
  currencies: string[] = [];

  fromCurrency: string = '';
  toCurrency: string = '';
  amount: string = '';

  convertedAmount: string = '';

  constructor(private converterService: ConverterService) {
    this.getCurrencies();
  }

  getCurrencies() {
    this.converterService.getCurrencies().subscribe({
      next: (info: Object) => {
        const currencies = info as string[];

        this.currencies = currencies;
      }
    })
  }

  convert() {
    this.converterService.convertValue(this.amount, this.fromCurrency, this.toCurrency).subscribe({
      next: (result: Object) => {
        const converted = result as convertedObject;

        const amountConverted: string = Object.entries(converted.rates)[0][1];
        const amountFormated = Number(amountConverted).toFixed(2);


        this.convertedAmount = `${this.amount} ${this.fromCurrency} is equal to ${amountFormated} ${this.toCurrency}`;
      }
    });

    console.log(this.amount);
    console.log(this.fromCurrency);
    console.log(this.toCurrency);
  }
}
