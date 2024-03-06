import { Component } from '@angular/core';
import { GetDogsService } from './get-dogs.service';

type infoDogs = {
  message: string;
  status: string;
}

@Component({
  selector: 'app-get-dogs',
  templateUrl: './get-dogs.component.html',
  styleUrl: './get-dogs.component.css'
})
export class GetDogsComponent {
  dogBreed: string = '';
  infoArray: string[];
  urlDog: string = '';

  constructor(private getDogsService: GetDogsService) {
    this.infoArray = ['Teste', 'Teste Um']
    this.getDogs();
  }

  getDogs() {
    this.getDogsService.getDogs().subscribe({
      next: (info: Object) => {
        const infoDog = info as infoDogs;

        const breed: string = infoDog.message.split('/')[4];
        this.dogBreed = breed;

        this.urlDog = infoDog.message;
      },
      error: (error) => {
        console.log(`Ocorreu um erro: ${error.message}`);
      }
    });
  }
}
