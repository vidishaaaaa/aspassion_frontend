import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';  // Ensure the correct import path

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Setup your routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
