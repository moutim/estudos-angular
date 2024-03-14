import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {
  forms: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    console.log(this.forms.value);
    this.forms.reset();
  }

  reset() {
    this.forms.reset();
  }
}
