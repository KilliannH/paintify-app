import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(5)]);

  form: FormGroup = new FormGroup({email: this.emailControl, password: this.passwordControl})

  constructor(private authService: AuthService, private dataService: DataService,
    private router: Router) { }

  getEmailErrorMessage() {
    if (this.emailControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailControl.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.passwordControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.passwordControl.hasError('minlength') ? 'Not a valid password' : '';
  }

  loginUser() {
    if (this.form.valid) {
      return this.authService.login(this.form.value);
    }
    return null;
  }
}
