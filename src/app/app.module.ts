import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // <-- Ensure FormsModule is listed before RouterModule
    AppRoutingModule,
    RouterModule.forRoot(routes)  // <-- Ensure you configure the RouterModule correctly
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
