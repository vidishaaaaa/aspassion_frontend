// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';  // Import the interceptor
import { AppRoutingModule } from './app-routing.module'; 
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // Include AppRoutingModule if you have defined it
    RouterModule,     // Ensure RouterModule is added here
  // Import HttpClientModule to enable HTTP requests
    // Other imports...
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,  // Register the AuthInterceptor
      multi: true,  // Allow multiple interceptors
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
