import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {


  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]],
      accept: [false, Validators.requiredTrue]
    }, {
      validators: [() => this.passwordsMatch()]
    });
  }

  passwordsMatch() {
    if (!this.form) return null;
    const { password, confirm } = this.form.getRawValue();
    return password === confirm ? null : { passwordsMatch: true }
  }

  signup() {
    console.log('Form? ', this.form);
    if (this.form.valid) {
      console.log('Enviar datos????', this.form.getRawValue());
    } else {
      alert('Debes llenar todos los campos');
    }
  }

  getEmail(e: KeyboardEvent) {
    console.log('Evento: ', (e.target as HTMLInputElement).value);
  }
}
