import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import IEndereco from '../interfaces/IEndereco';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {
  forms: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      cep: [null, Validators.required],
      numero: [null, Validators.required],
      complemento: [null, Validators.required],
      rua: [null, Validators.required],
      bairro: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.forms.value);
    this.forms.reset();
  }

  reset() {
    this.forms.reset();
  }

  consultaCEP(event: any) {
    const cep = event.target.value.replace(/\D/g, '');

    if (cep != '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.http.get<IEndereco>(`https://viacep.com.br/ws/${cep}/json/`).subscribe({
          next: (result) => {
            this.forms.patchValue({
              bairro: result.bairro,
              rua: result.logradouro,
              cidade: result.localidade,
              estado: result.uf
            })
            console.log(result);
          }
        });
      }
    }
  }
}
