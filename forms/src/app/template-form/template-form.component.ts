import { Component } from '@angular/core';
import IUsuario from '../interfaces/IUsuario';
import { HttpClient } from '@angular/common/http';
import IEndereco from '../interfaces/IEndereco';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  usuario: IUsuario = {
    email: '',
    nome: ''
  }

  endereco: IEndereco = {
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    logradouro: '',
    localidade: '',
    uf: ''
  }

  constructor(private http: HttpClient) {}

  onSubmit(t: any) {
    console.log(t);

    console.log(this.usuario);
  }

  consultaCEP(event: any) {
    const cep = event.target.value.replace(/\D/g, '');

    if (cep != '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.http.get<IEndereco>(`https://viacep.com.br/ws/${cep}/json/`).subscribe({
          next: (result) => {
            this.endereco = {
              ...this.endereco,
              bairro: result.bairro,
              rua: result.logradouro,
              cidade: result.localidade,
              estado: result.uf
            }
            console.log(result);
          }
        });
      }
    }

  }
}
