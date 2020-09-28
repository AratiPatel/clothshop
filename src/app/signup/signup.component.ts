import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpUserModel } from '../model/login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: SignUpUserModel = new SignUpUserModel();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if (
      !this.signUpForm.email ||
      !this.signUpForm.password
    ) {
      return;
    }
    this.router.navigate(['/product']);
  }
}
