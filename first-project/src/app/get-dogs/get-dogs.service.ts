import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDogsService {
  constructor(private readonly http: HttpClient) { }

  getDogs() {
    return this.http.get("https://dog.ceo/api/breeds/image/random");
  }
}
