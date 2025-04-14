import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Import the AuthService
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    const credentials = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(credentials).subscribe(
      (response) => {
        const token = response; // Assuming backend sends the JWT token
        this.authService.storeToken(token);
        console.log('Login successful!');
        alert('Login successful!');
      },
      (error) => {
        console.error('Login error:', error);
        alert('Login failed!');
      }
    );
  }
}
