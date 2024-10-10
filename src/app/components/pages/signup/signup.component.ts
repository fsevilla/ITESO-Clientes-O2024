import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  datos = {
    name: 'Juan Perez',
    email: 'juan@email.com',
    password: 'Hola123',
    confirm: 'Hola1234567890',
    accept: false
  }

  signup() {
    if (this.datos.accept) {
      console.log('Enviar datos...', this.datos);
      this.datos.name = '';
    } else {
      alert('Debes aceptar');
    }
  }

  getEmail(e: KeyboardEvent) {
    console.log('Evento: ', (e.target as HTMLInputElement).value);
  }
}
