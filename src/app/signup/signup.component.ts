import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports:[FormsModule , RouterModule],
  
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  phoneNumber: string = '';

  onRegister() {
    console.log('User Registered:', {
      name: this.name,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber,
    });
    alert('Signup successful!');
  }
}
