import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  private host: string = `https://api.frankfurter.app`;

  constructor(private readonly http: HttpClient) { }

  getCurrencies() {
    return this.http.get(`${this.host}/currencies`);
  }
}
