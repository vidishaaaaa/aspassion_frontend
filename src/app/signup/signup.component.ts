import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [FormsModule, RouterModule],
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  phoneNumber: string = '';

  constructor(private http: HttpClient) {}  // Inject HttpClient

  onRegister() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phoneNumber,
    };

    // Make HTTP POST request to register the user
    this.http.post('http://localhost:9090/auth/register', user).subscribe(
      (response: any) => {
        // Handle successful registration
        console.log('User registered successfully', response);
        alert('Signup successful!');
      },
      (error: any) => {
        // Handle error
        console.error('Registration failed', error);
        alert('Signup failed. Please try again.');
      }
    );
  }
}
